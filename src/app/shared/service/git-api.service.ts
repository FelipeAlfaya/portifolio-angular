import { GitArchive } from '../interfaces/git-archive';
import { GitLangs } from '../interfaces/git-langs';
import { GitRepo } from '../interfaces/git-repo';
import { GitUser } from './../interfaces/git-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Octokit } from '@octokit/rest';
import { OctokitResponse } from '@octokit/types';

@Injectable({
  providedIn: 'root',
})
export class GitApiService {
  public user = 'FelipeAlfaya';
  public octokit = new Octokit();

  constructor(private http: HttpClient) {
    this.octokit = new Octokit({
      auth: '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',
    });
  }

  public async octokitGetRepos(): Promise<OctokitResponse<GitRepo[], number>> {
    const _repos: OctokitResponse<any> = await this.octokit.request(
      `GET /users/{username}/repos`
    );
    return _repos;
  }

  public async octokitGetUser(): Promise<OctokitResponse<GitUser, number>> {
    const _user: OctokitResponse<GitUser, number> = await this.octokit.request(
      `GET /users/${this.user}`
    );
    return _user;
  }

  public async octokitGetRepo(
    repo: string
  ): Promise<OctokitResponse<GitRepo, number>> {
    const _repo: OctokitResponse<GitRepo, number> = await this.octokit.request(
      `GET /repos/${this.user}/${repo}`
    );
    return _repo;
  }

  public async octokitGetRepoLanguages(
    repo: string
  ): Promise<OctokitResponse<GitLangs, number>> {
    const _languages: OctokitResponse<GitLangs, number> =
      await this.octokit.request(`Get /repos/${this.user}/${repo}/languages`);
    return _languages;
  }

  public async octokitGetArchive(
    repo: string,
    file: string
  ): Promise<OctokitResponse<GitArchive, number>> {
    const _archive: OctokitResponse<GitArchive, number> =
      await this.octokit.request(
        `GET /repos/${this.user}/${repo}/contents/${file}`,
        {
          Headers: {
            Accept: 'application/vnd.github.base64',
          },
        }
      );

    return _archive;
  }
}
