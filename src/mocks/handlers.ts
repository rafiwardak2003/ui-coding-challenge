import { http, HttpResponse } from "msw"

export const handlers = [
  http.get(
    "https://api.github.com/repos/divvydose/ui-coding-challenge/pulls",
    async () => {
      return HttpResponse.json([
        {
          url: "https://api.github.com/repos/divvydose/ui-coding-challenge/pulls/5",
          id: 510094135,
          node_id: "MDExOlB1bGxSZXF1ZXN0NTEwMDk0MTM1",
          html_url: "https://github.com/divvydose/ui-coding-challenge/pull/5",
          diff_url:
            "https://github.com/divvydose/ui-coding-challenge/pull/5.diff",
          patch_url:
            "https://github.com/divvydose/ui-coding-challenge/pull/5.patch",
          issue_url:
            "https://api.github.com/repos/divvydose/ui-coding-challenge/issues/5",
          number: 5,
          state: "open",
          locked: true,
          title: "DD-1004-add-cats | Add support for displaying cats",
          user: {
            login: "jrubins",
            id: 971647,
            node_id: "MDQ6VXNlcjk3MTY0Nw==",
            avatar_url: "https://avatars.githubusercontent.com/u/971647?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/jrubins",
            html_url: "https://github.com/jrubins",
            followers_url: "https://api.github.com/users/jrubins/followers",
            following_url:
              "https://api.github.com/users/jrubins/following{/other_user}",
            gists_url: "https://api.github.com/users/jrubins/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/jrubins/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/jrubins/subscriptions",
            organizations_url: "https://api.github.com/users/jrubins/orgs",
            repos_url: "https://api.github.com/users/jrubins/repos",
            events_url: "https://api.github.com/users/jrubins/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/jrubins/received_events",
            type: "User",
            user_view_type: "public",
            site_admin: false,
          },
          body: "There were too many dogs in the repository. We need to add some cats as well.",
          created_at: "2020-10-26T15:02:44Z",
          updated_at: "2021-05-05T15:34:43Z",
          closed_at: null,
          merged_at: null,
          merge_commit_sha: "8b8151936de22393ec525cbe4117599dd41ed8c0",
          assignee: null,
          assignees: [],
          requested_reviewers: [],
          requested_teams: [],
          labels: [
            {
              id: 2456033413,
              node_id: "MDU6TGFiZWwyNDU2MDMzNDEz",
              url: "https://api.github.com/repos/divvydose/ui-coding-challenge/labels/enhancement",
              name: "enhancement",
              color: "a2eeef",
              default: true,
              description: "New feature or request",
            },
            {
              id: 2974754590,
              node_id: "MDU6TGFiZWwyOTc0NzU0NTkw",
              url: "https://api.github.com/repos/divvydose/ui-coding-challenge/labels/animals",
              name: "animals",
              color: "0E4C73",
              default: false,
              description: "",
            },
          ],
          milestone: null,
          draft: false,
          commits_url:
            "https://api.github.com/repos/divvydose/ui-coding-challenge/pulls/5/commits",
          review_comments_url:
            "https://api.github.com/repos/divvydose/ui-coding-challenge/pulls/5/comments",
          review_comment_url:
            "https://api.github.com/repos/divvydose/ui-coding-challenge/pulls/comments{/number}",
          comments_url:
            "https://api.github.com/repos/divvydose/ui-coding-challenge/issues/5/comments",
          statuses_url:
            "https://api.github.com/repos/divvydose/ui-coding-challenge/statuses/962bd8144d8f27dc79b1ca5fc8e8ea66b636054d",
          head: {
            label: "divvydose:DD-1004-add-cats",
            ref: "DD-1004-add-cats",
            sha: "962bd8144d8f27dc79b1ca5fc8e8ea66b636054d",
            user: {
              login: "divvydose",
              id: 29736902,
              node_id: "MDEyOk9yZ2FuaXphdGlvbjI5NzM2OTAy",
              avatar_url:
                "https://avatars.githubusercontent.com/u/29736902?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/divvydose",
              html_url: "https://github.com/divvydose",
              followers_url: "https://api.github.com/users/divvydose/followers",
              following_url:
                "https://api.github.com/users/divvydose/following{/other_user}",
              gists_url:
                "https://api.github.com/users/divvydose/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/divvydose/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/divvydose/subscriptions",
              organizations_url: "https://api.github.com/users/divvydose/orgs",
              repos_url: "https://api.github.com/users/divvydose/repos",
              events_url:
                "https://api.github.com/users/divvydose/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/divvydose/received_events",
              type: "Organization",
              user_view_type: "public",
              site_admin: false,
            },
            repo: {
              id: 307387935,
              node_id: "MDEwOlJlcG9zaXRvcnkzMDczODc5MzU=",
              name: "ui-coding-challenge",
              full_name: "divvydose/ui-coding-challenge",
              private: false,
              owner: {
                login: "divvydose",
                id: 29736902,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjI5NzM2OTAy",
                avatar_url:
                  "https://avatars.githubusercontent.com/u/29736902?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/divvydose",
                html_url: "https://github.com/divvydose",
                followers_url:
                  "https://api.github.com/users/divvydose/followers",
                following_url:
                  "https://api.github.com/users/divvydose/following{/other_user}",
                gists_url:
                  "https://api.github.com/users/divvydose/gists{/gist_id}",
                starred_url:
                  "https://api.github.com/users/divvydose/starred{/owner}{/repo}",
                subscriptions_url:
                  "https://api.github.com/users/divvydose/subscriptions",
                organizations_url:
                  "https://api.github.com/users/divvydose/orgs",
                repos_url: "https://api.github.com/users/divvydose/repos",
                events_url:
                  "https://api.github.com/users/divvydose/events{/privacy}",
                received_events_url:
                  "https://api.github.com/users/divvydose/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
              },
              html_url: "https://github.com/divvydose/ui-coding-challenge",
              description: null,
              fork: false,
              url: "https://api.github.com/repos/divvydose/ui-coding-challenge",
              forks_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/forks",
              keys_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/keys{/key_id}",
              collaborators_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/collaborators{/collaborator}",
              teams_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/teams",
              hooks_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/hooks",
              issue_events_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/issues/events{/number}",
              events_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/events",
              assignees_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/assignees{/user}",
              branches_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/branches{/branch}",
              tags_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/tags",
              blobs_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/git/blobs{/sha}",
              git_tags_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/git/tags{/sha}",
              git_refs_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/git/refs{/sha}",
              trees_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/git/trees{/sha}",
              statuses_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/statuses/{sha}",
              languages_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/languages",
              stargazers_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/stargazers",
              contributors_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/contributors",
              subscribers_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/subscribers",
              subscription_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/subscription",
              commits_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/commits{/sha}",
              git_commits_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/git/commits{/sha}",
              comments_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/comments{/number}",
              issue_comment_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/issues/comments{/number}",
              contents_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/contents/{+path}",
              compare_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/compare/{base}...{head}",
              merges_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/merges",
              archive_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/{archive_format}{/ref}",
              downloads_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/downloads",
              issues_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/issues{/number}",
              pulls_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/pulls{/number}",
              milestones_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/milestones{/number}",
              notifications_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/notifications{?since,all,participating}",
              labels_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/labels{/name}",
              releases_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/releases{/id}",
              deployments_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/deployments",
              created_at: "2020-10-26T13:50:13Z",
              updated_at: "2023-01-27T23:06:05Z",
              pushed_at: "2021-10-29T18:52:23Z",
              git_url: "git://github.com/divvydose/ui-coding-challenge.git",
              ssh_url: "git@github.com:divvydose/ui-coding-challenge.git",
              clone_url: "https://github.com/divvydose/ui-coding-challenge.git",
              svn_url: "https://github.com/divvydose/ui-coding-challenge",
              homepage: null,
              size: 131,
              stargazers_count: 0,
              watchers_count: 0,
              language: null,
              has_issues: true,
              has_projects: true,
              has_downloads: true,
              has_wiki: true,
              has_pages: false,
              has_discussions: false,
              forks_count: 0,
              mirror_url: null,
              archived: true,
              disabled: false,
              open_issues_count: 5,
              license: null,
              allow_forking: true,
              is_template: false,
              web_commit_signoff_required: false,
              topics: [],
              visibility: "public",
              forks: 0,
              open_issues: 5,
              watchers: 0,
              default_branch: "master",
            },
          },
          base: {
            label: "divvydose:master",
            ref: "master",
            sha: "da6854d0917fcdfe2270215fa6113c8601695b71",
            user: {
              login: "divvydose",
              id: 29736902,
              node_id: "MDEyOk9yZ2FuaXphdGlvbjI5NzM2OTAy",
              avatar_url:
                "https://avatars.githubusercontent.com/u/29736902?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/divvydose",
              html_url: "https://github.com/divvydose",
              followers_url: "https://api.github.com/users/divvydose/followers",
              following_url:
                "https://api.github.com/users/divvydose/following{/other_user}",
              gists_url:
                "https://api.github.com/users/divvydose/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/divvydose/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/divvydose/subscriptions",
              organizations_url: "https://api.github.com/users/divvydose/orgs",
              repos_url: "https://api.github.com/users/divvydose/repos",
              events_url:
                "https://api.github.com/users/divvydose/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/divvydose/received_events",
              type: "Organization",
              user_view_type: "public",
              site_admin: false,
            },
            repo: {
              id: 307387935,
              node_id: "MDEwOlJlcG9zaXRvcnkzMDczODc5MzU=",
              name: "ui-coding-challenge",
              full_name: "divvydose/ui-coding-challenge",
              private: false,
              owner: {
                login: "divvydose",
                id: 29736902,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjI5NzM2OTAy",
                avatar_url:
                  "https://avatars.githubusercontent.com/u/29736902?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/divvydose",
                html_url: "https://github.com/divvydose",
                followers_url:
                  "https://api.github.com/users/divvydose/followers",
                following_url:
                  "https://api.github.com/users/divvydose/following{/other_user}",
                gists_url:
                  "https://api.github.com/users/divvydose/gists{/gist_id}",
                starred_url:
                  "https://api.github.com/users/divvydose/starred{/owner}{/repo}",
                subscriptions_url:
                  "https://api.github.com/users/divvydose/subscriptions",
                organizations_url:
                  "https://api.github.com/users/divvydose/orgs",
                repos_url: "https://api.github.com/users/divvydose/repos",
                events_url:
                  "https://api.github.com/users/divvydose/events{/privacy}",
                received_events_url:
                  "https://api.github.com/users/divvydose/received_events",
                type: "Organization",
                user_view_type: "public",
                site_admin: false,
              },
              html_url: "https://github.com/divvydose/ui-coding-challenge",
              description: null,
              fork: false,
              url: "https://api.github.com/repos/divvydose/ui-coding-challenge",
              forks_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/forks",
              keys_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/keys{/key_id}",
              collaborators_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/collaborators{/collaborator}",
              teams_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/teams",
              hooks_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/hooks",
              issue_events_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/issues/events{/number}",
              events_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/events",
              assignees_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/assignees{/user}",
              branches_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/branches{/branch}",
              tags_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/tags",
              blobs_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/git/blobs{/sha}",
              git_tags_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/git/tags{/sha}",
              git_refs_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/git/refs{/sha}",
              trees_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/git/trees{/sha}",
              statuses_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/statuses/{sha}",
              languages_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/languages",
              stargazers_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/stargazers",
              contributors_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/contributors",
              subscribers_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/subscribers",
              subscription_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/subscription",
              commits_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/commits{/sha}",
              git_commits_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/git/commits{/sha}",
              comments_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/comments{/number}",
              issue_comment_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/issues/comments{/number}",
              contents_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/contents/{+path}",
              compare_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/compare/{base}...{head}",
              merges_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/merges",
              archive_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/{archive_format}{/ref}",
              downloads_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/downloads",
              issues_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/issues{/number}",
              pulls_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/pulls{/number}",
              milestones_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/milestones{/number}",
              notifications_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/notifications{?since,all,participating}",
              labels_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/labels{/name}",
              releases_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/releases{/id}",
              deployments_url:
                "https://api.github.com/repos/divvydose/ui-coding-challenge/deployments",
              created_at: "2020-10-26T13:50:13Z",
              updated_at: "2023-01-27T23:06:05Z",
              pushed_at: "2021-10-29T18:52:23Z",
              git_url: "git://github.com/divvydose/ui-coding-challenge.git",
              ssh_url: "git@github.com:divvydose/ui-coding-challenge.git",
              clone_url: "https://github.com/divvydose/ui-coding-challenge.git",
              svn_url: "https://github.com/divvydose/ui-coding-challenge",
              homepage: null,
              size: 131,
              stargazers_count: 0,
              watchers_count: 0,
              language: null,
              has_issues: true,
              has_projects: true,
              has_downloads: true,
              has_wiki: true,
              has_pages: false,
              has_discussions: false,
              forks_count: 0,
              mirror_url: null,
              archived: true,
              disabled: false,
              open_issues_count: 5,
              license: null,
              allow_forking: true,
              is_template: false,
              web_commit_signoff_required: false,
              topics: [],
              visibility: "public",
              forks: 0,
              open_issues: 5,
              watchers: 0,
              default_branch: "master",
            },
          },
          _links: {
            self: {
              href: "https://api.github.com/repos/divvydose/ui-coding-challenge/pulls/5",
            },
            html: {
              href: "https://github.com/divvydose/ui-coding-challenge/pull/5",
            },
            issue: {
              href: "https://api.github.com/repos/divvydose/ui-coding-challenge/issues/5",
            },
            comments: {
              href: "https://api.github.com/repos/divvydose/ui-coding-challenge/issues/5/comments",
            },
            review_comments: {
              href: "https://api.github.com/repos/divvydose/ui-coding-challenge/pulls/5/comments",
            },
            review_comment: {
              href: "https://api.github.com/repos/divvydose/ui-coding-challenge/pulls/comments{/number}",
            },
            commits: {
              href: "https://api.github.com/repos/divvydose/ui-coding-challenge/pulls/5/commits",
            },
            statuses: {
              href: "https://api.github.com/repos/divvydose/ui-coding-challenge/statuses/962bd8144d8f27dc79b1ca5fc8e8ea66b636054d",
            },
          },
          author_association: "CONTRIBUTOR",
          auto_merge: null,
          active_lock_reason: null,
        },
      ])
    },
  ),
]
