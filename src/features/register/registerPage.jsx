import Footer from "../../components/common/Footer";
import NavbarRegister from "../../components/common/NavbarRegister";
import RegisterPage1 from "../../components/pages/register/registerPage1/registerPage1";

function RegisterPage() {
  return (
    <div>
      <NavbarRegister />
        <RegisterPage1 />
      <Footer />
    </div>
  );
}
export default RegisterPage;
