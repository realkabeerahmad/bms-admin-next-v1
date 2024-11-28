import Input from "@/components/input/input";

const Login = () => {
  const fields = [
    {
      id: "1",
      type: "text",
      regex: "",
      name: "username",
      placeholder: "username",
      label: "username",
    },
    {
      id: "2",
      type: "password",
      regex: "",
      name: "password",
      placeholder: "password",
      label: "password",
    },
  ];
  return (
    <div className="">
      <h1 className="">LOGIN</h1>
      {fields.map((field) => {
        return <Input field={field} key={field.id} />;
      })}
      <button>Login</button>
    </div>
  );
};

export default Login;
