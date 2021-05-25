import { RepositoryItem } from "./RepositoryItem";
import { useEffect, useState } from 'react'
import '../styles/repositories.scss'

interface Repository {
  name: string;
  description: string;
  html_url: string;
}
export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  useEffect(() => {
    console.log(repositories)
  }, [repositories]);

  return (
    <section className="repository-list">
      <ul>
        {repositories.map(repository => (
          <RepositoryItem repository={repository} key={repository.name} />
        ))}
      </ul>
    </section>
  )
}