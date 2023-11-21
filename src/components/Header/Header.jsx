import { Container, Avatar } from "./styled"
import logo from "../../assets/logo-mini.svg"
import { Link } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { useContext } from "react"

export default function Header() {
  const { user } = useContext(UserContext)

  return (
    <Container>
      <Link to="/hoje">
        <img src={logo} alt="TrackIt" />
      </Link>

      <Avatar src={user.image} alt="Imagem de perfil" />
    </Container>
  )
}
