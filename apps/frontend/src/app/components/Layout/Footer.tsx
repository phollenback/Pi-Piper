import './Footer.css'
import { Github } from "@deemlol/next-icons";
import { Twitter } from "@deemlol/next-icons";
import { Trello } from "@deemlol/next-icons";

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <a href="https://github.com/phollenback" target="_blank" className='text-center' rel="noopener noreferrer"><Github size={36} color="#FFFFFF" />GitHub</a>
            <a href="https://x.com/peyloading" target="_blank" rel="noopener noreferrer"><Twitter size={36} color="#FFFFFF" />Twitter</a>
            <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer"><Trello size={36} color="#FFFFFF" />pipiper.com</a>
        </footer>
    );
}

export default Footer;
