// import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FormAddFile from "../components/FormAddFile/FormAddFile";
import { useState } from "react";

const AddFilePage = () => {
  const [showForm, setShowForm] = useState(true);

  return (
    <>
      <Header />
      <main className="w-full h-screen flex flex-1 flex-col items-center justify-center ">
        <FormAddFile showForm={showForm} setShowForm={setShowForm} />
      </main>
      <Footer />
    </>
  );
};

export default AddFilePage;
