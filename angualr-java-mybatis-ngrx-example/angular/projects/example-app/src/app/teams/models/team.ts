export interface Team {
  id: string;
  team: string;
}

export function generateMockTeam(): Team {
  return {
    id: '1',
    team:'Test Team' 
  };
}
