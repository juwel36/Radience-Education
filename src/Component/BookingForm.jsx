
import React, { useContext, useState } from 'react';
import { useFormData } from '../Hooks/FormDataContext';
import Payment from '../DeshBoardComponent/Payment';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const BookingForm = () => {
  const { updateFormData } = useFormData();
  const [afterloading, setAfterloading] = useState(false);
  const [redirectToPayment, setRedirectToPayment] = useState(false);
  const {user}=useContext(AuthContext)



  const handlemocksubmit = (e) => {
    e.preventDefault();
    setAfterloading(true);

    const studentNameValue = e.target.studentName.value;
    const emailValue = e.target.email.value;
    const phoneNumbeValue = e.target.phoneNumber.value;
    const examNumberValue = e.target.examNumber.value;

    const formData = {
      studentName: studentNameValue,
      email: emailValue,
      phoneNumbe: phoneNumbeValue,
      examNumber: examNumberValue,
    };


    if(user){
      updateFormData(formData);
      setRedirectToPayment(true);
    }else{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "you need to log in for booking",
        showConfirmButton: false,
        timer: 3000
      });
    }

   

    setAfterloading(false);
  };

  return (
    <div>
      <div className="w-3/4 lg:w-2/4 mx-auto">
        <h2 className="text-2xl mb-3"></h2>
       
        {redirectToPayment ? (
        <Payment />
      ) : (
        <div>
 <div className="text-center my-16 lg:w-96 mx-auto ">
          <p className="text-red-600 text-xl lg:text-2xl border-y-2 py-2 mt-2 border-animation">
            📝 Booked your Seat 📜
          </p>
        </div>
        <form onSubmit={handlemocksubmit}>
          <div>
            <label>Student Name : *</label>
            <input
              className="input input-bordered input-error w-full"
              type="text"
              required
              name="studentName"
            />
          </div>

          <div className="mt-3">
            <label className="pt-8">Email : *</label>
            <input
              className="input input-bordered input-error w-full"
              type="email"
              required
              name="email"
            />
          </div>

          <div className="flex gap-4 mt-3">
            <div>
              <label>Phone Number : * </label>
              <input
                className="input input-bordered input-error w-full"
                type="text"
                required
                name="phoneNumber"
              />
            </div>
            <div>
              <label>Exam Code : *</label>
              <input
                className="input input-bordered input-error w-full"
                type="text"
                required
                name="examNumber"
              />
            </div>
          </div>
          <br />

          <input
            className="btn w-full bg-red-600 text-white"
            type="submit"
            value="Book Seat"
          />

          {afterloading && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <span className="loading loading-spinner text-primary"></span>
            </div>
          )}
        </form>
        </div>
         )}
      </div>
      <div className="text-center my-14">
        <h1 className="text-2xl "> Or call </h1>
        <p className="text-xl mt-3 "> ☎ +𝟖𝟖𝟎𝟏𝟕𝟓𝟗-𝟕𝟖𝟕𝟑𝟔𝟒</p>
      </div>
    </div>
  );
};

export default BookingForm;
