import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'unform',
  descriptions: 'Forms in React', link: 'https://github.com/unform/unform'
}
export function RepositoryList() {
  return (
    <section className="repository-list">
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}