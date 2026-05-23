import { NavLink } from "react-router-dom"


const items = [
    {title: "DashBoard", icon: "fa-solid fa-table-list", to: "dash-board"},
    {title: "Người dùng", icon: "fa-solid fa-user-group" , to: "user"},
    {title: "Tin nhắn", icon: "fa-regular fa-comment" , to: "message"},
    {title: "Nhóm chat", icon: "fa-solid fa-users" , to: "groups"},
    {title: "Báo cáo", icon: "fa-solid fa-file" , to: "repost"},
    {title: "Kiểm duyệt", icon: "fa-solid fa-shield" , to: "censor"},
    {title: "Cài đặt", icon: "fa-solid fa-gear" , to: "setting"},
]
export default function Sidebar() {
    return (
        <>
            <header className="flex flex-row-reverse items-center justify-center gap-2 border-b p-4">
                <div>
                    <h1 className="text-lg">ZaloAdmin</h1>
                    <span className="text-xs text-gray-500">CMS v1.0</span>
                </div>
                <i className="fa-regular fa-comment text-2xl"></i>
            </header>
            <nav className="flex flex-col gap-1 p-2">
    {items.map((item) => {
        return (
            <NavLink
                key={item.title}
                to={item.to}
                className={({ isActive }) => `
                    flex items-center gap-3 rounded-md px-4 py-3 transition-all
                    hover:bg-gray-100
                    ${
                        isActive
                            ? "border-l-4 border-blue-500 bg-gray-100 text-blue-600 font-medium"
                            : "border-l-4 border-transparent"
                    }`}>
                <i className={item.icon}></i>
                <span>{item.title}</span>
            </NavLink>
        );
    })}
</nav>
        </>
    )
}