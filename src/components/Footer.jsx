import './Footer.css'
const Footer =()=>{
    return(
        <footer className="footer">
            <p>🎉 Connecting students through passion and creativity! Join a club today and be part of something amazing. 🌍</p>
            <p>&copy; {new Date().getFullYear()} Club Website. All rights reserved.</p>
        </footer>
    );
}

export default Footer;