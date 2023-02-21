import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import SocialContact from "./SocialContacts";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer>
        <SocialContact />
      </Footer>
    </>
  );
}
