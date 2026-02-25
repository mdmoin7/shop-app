import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../../ui/components/Button";
import { clearSession } from "../userSlice";

function LoginButtons() {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" onClick={() => navigate("/login")}>
          Login
        </Button>

        <Button size="sm" onClick={() => navigate("/register")}>
          Register
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-700 dark:text-gray-300">
        Hi, {user.email}
      </span>

      <Button
        size="sm"
        variant="outline"
        onClick={() => dispatch(clearSession())}
      >
        Logout
      </Button>
    </div>
  );
}

export default LoginButtons;
