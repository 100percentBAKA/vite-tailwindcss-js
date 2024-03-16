import { useState } from "react";
import { useMutateOTP } from "../../services/mutations";

const Login1 = () => {
  const [phNo, setPhNo] = useState();
  const { mutate } = useMutateOTP();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: phNo,
    };
    console.log(formData);
    const response = mutate(formData);
    console.log(response);
  };

  return (
    <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
      <label htmlFor="phoneNum">Enter Phone Number</label>
      <input
        type="text"
        id="phoneNum"
        onChange={(e) => setPhNo(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login1;
