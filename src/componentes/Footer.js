import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer(){
    return(
        <ul>
            <li className="IconFacebook">
                <FaFacebook/>
            </li>
            <li className="IconFacebook">
                <FaInstagram/>
            </li>
            <li className="IconFacebook">
                <FaLinkedin/>
            </li>
        </ul>
    )
}

export default Footer