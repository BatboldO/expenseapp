import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
// import { FaBeer, FaHome } from "react-icons/fa";
import { UserContext } from "@/context/UserProvider";
import { MoonIcon, SunIcon } from "@/components/iconsvg";
import { ThemeContext } from "@/context/ThemeContext";

export default function Home() {
  const router = useRouter();
  const { user, logout } = useContext(UserContext);
  const { changeTheme, theme } = useContext(ThemeContext);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) {
    return null;
  }

  const getIcons = (name, color) => {
    const icons = {
      beer: <FaBeer size={90} color={color} />,
      home: <FaHome size={90} color={color} />,
    };
    return icons[name];
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between `}
    >
      <div>
        {console.log("user", user)}
        <h1>Welcome Home Page - {user.name}</h1>
        <h2>Email: {user.email}</h2>
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value={theme}
            onChange={() => {
              changeTheme(theme === "light" ? "dark" : "light");
            }}
          />

          {/* sun icon */}
          <SunIcon />

          {/* moon icon */}
          <MoonIcon />
        </label>
        <button className="btn" onClick={logout}>
          logout
        </button>
      </div>
    </main>
  );
}