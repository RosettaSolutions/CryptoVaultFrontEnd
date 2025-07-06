import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FormValidateFile from "../components/FormValidateFile/FormValidateFile";
import CardTitleInfo from "../components/CardTitleInfo/CardTitleInfo";
import { useEffect, useState } from "react";
import ValidationState from "../components/ValidationState/ValidationState";
import { useValidateFile } from "../hooks/useValidateFile";

const ValidationPage = () => {
  const { validate, loading, responseData } = useValidateFile();
  const [stateValidation, setStateValidation] = useState<
    "waiting" | "true" | "false"
  >("waiting");

  useEffect(() => {
    if (responseData) {
      if (responseData.is_authentic == true) {
        setStateValidation("true");
      } else if (responseData.is_authentic == false) {
        setStateValidation("false");
      }
    } else {
      setStateValidation("waiting");
    }
  }, [responseData, setStateValidation]);

  return (
    <>
      <Header />
      <main className="w-full h-screen flex flex-1 flex-col items-center justify-center">
        <CardTitleInfo
          title="Validation"
          description="This page allows you to validate external files based on registered ones"
        />
        <FormValidateFile validate={validate} setStateValidation={setStateValidation} />
        <ValidationState loading={loading} state={stateValidation} />
      </main>
      <Footer />
    </>
  );
};

export default ValidationPage;
