import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <div>
        <ProfilePicture src="http://github.com/GuFvr.png" />
      </div>
      <ProfileDetails>
          <header>
            <h1>Gustavo Favero</h1>

            <ExternalLink text="GitHub" />
          </header>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean 
            malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              GuFvr
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              Eduzz
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              347 seguidores
            </li>
          </ul>
        </ProfileDetails>
    </ProfileContainer>
  )
}