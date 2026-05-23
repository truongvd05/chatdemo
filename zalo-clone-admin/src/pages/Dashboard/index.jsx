import StatCard from "@/components/StatCard";
import { useAdminSocket } from "@/hook/useSocket";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useGetTodayStatsQuery } from "@/feature/Admin/adminApi";
import { setStats } from "@/store/slices/statsSlice";

function DashBoard() {
    const dispatch = useDispatch();
    useAdminSocket();

    // Gọi API 1 lần lúc load — seed data ban đầu
    const { data, isLoading } = useGetTodayStatsQuery();

    // Khi API trả về thì đẩy vào redux — sau đó socket tự cập nhật
    useEffect(() => {
        if (data) {
            dispatch(setStats(data));
        }
    }, [data, dispatch]);

    const { users, messages, groups } = useSelector((s) => s.stats);

    if (isLoading) return <div>Đang tải...</div>;

    return (
        <div>
            <StatCard label="Người dùng hôm nay" value={users} />
            <StatCard label="Tin nhắn hôm nay"   value={messages} />
            <StatCard label="Nhóm tạo mới"        value={groups} />
        </div>
    );
}

export default DashBoard;