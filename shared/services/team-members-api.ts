import { TeamMemberModel } from '../../ducks/team-members';

const fetchUrl = 'http://localhost:4000/team-members';

export const getTeamMembers = () => (
  fetch(fetchUrl)
    .then(response => response.json())
);

export const saveTeamMember = (teamMember: TeamMemberModel) => (
  fetch(fetchUrl, {
    method: 'POST',
    body: JSON.stringify(teamMember),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
);
