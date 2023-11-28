import useContextInfo from "../../Hooks/useContextInfo";
import { useForm } from "react-hook-form";

const Search = () => {
 const {
   register,
   handleSubmit,
   watch,
   formState: { errors },
 } = useForm();

 const onSubmit = (data) => console.log(data);

 console.log(watch("example")); 
  const {search,serSearch} = useContextInfo()


    return (
      <div>
        <input
          type="text"
          placeholder="Search here"
          className="input bg-transparent  input-bordered text-white border-white border-2 w-60 md:w-96"
        />
      </div>
    );
};

export default Search;