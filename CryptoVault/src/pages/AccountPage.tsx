import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import { PropagateLoader } from "react-spinners";
import CardTitleInfo from "../components/CardTitleInfo/CardTitleInfo";
import AccountPanel from "../components/AccountPanel";

const AccountPage = () => {
  return (
    <>
      <Header />
      <main className="w-full h-screen flex flex-1 flex-col items-center justify-center">
        <CardTitleInfo
          title="Account"
          description="This page allows you to manage your account informations, settings and preferencies."
        />
        <AccountPanel />
      </main>
      <Footer />
    </>
  );
};

export default AccountPage;
