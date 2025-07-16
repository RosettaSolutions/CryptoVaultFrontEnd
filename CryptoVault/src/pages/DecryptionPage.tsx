import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FormDecryptFile from "../components/FormDecryptFile/FormDecryptFile";
import CardTitleInfo from "../components/CardTitleInfo/CardTitleInfo";

const DecryptionPage = () => {
  return (
    <>
      <Header />
      <main className="w-full h-screen flex flex-1 flex-col items-center justify-center">
        <CardTitleInfo
          title="Decryption"
          description="This page allows you decrypt the encrypted copy of the registered file using the unique decryption key of the file."
        />
        <FormDecryptFile />
      </main>
      <Footer />
    </>
  );
};

export default DecryptionPage;
