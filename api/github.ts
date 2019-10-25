import Release from '../models/Release';
import fetch from 'isomorphic-fetch';

const queryGitHubGraphqlAPI = (token: string) => (
  query: string
): Promise<Response> =>
  fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    },
    body: JSON.stringify({ query })
  });

const getReleasesQuery = (owner: string, repository: string): string => `
{
  repository(owner: "${owner}", name: "${repository}") {
    releases(first: 20, orderBy: {field: CREATED_AT, direction:DESC }) {
      edges {
        node {
          id
          name
          description
          url
          createdAt
        }
      }
    }
  }
}`;

export async function getReleases(
  token: string,
  owner: string,
  repository: string
): Promise<Release[]> {
  const res = await queryGitHubGraphqlAPI(token)(
    getReleasesQuery(owner, repository)
  );
  const json = await res.json();
  return json.data.repository.releases.edges.map(
    (e: { node: Release }) => e.node
  );
}
