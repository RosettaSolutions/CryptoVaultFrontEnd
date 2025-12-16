// import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FeedbackForm from "../components/FeedbackForm";
import CardTitleInfo from "../components/CardTitleInfo/CardTitleInfo";

const FeedbackPage = () => {
  return (
    <>
      <Header />
      <main className="w-full h-screen flex flex-1 flex-col items-center justify-center ">
        <CardTitleInfo
          title="Feedback"
          description="This page allows you to provide feedback on the application and suggest improvements."
        />
        <FeedbackForm />
      </main>
      <Footer />
    </>
  );
};

export default FeedbackPage;
