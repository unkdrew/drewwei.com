[![Netlify Status](https://api.netlify.com/api/v1/badges/5030219c-6ce7-43ee-a638-9431aa02e216/deploy-status)](https://app.netlify.com/sites/drewwei/deploys)

### 1. Environment Setup
* Install [Homebrew](https://docs.brew.sh/Installation).
* Install Node.js.
  * Run command: `brew install node`
  * Verify version of the installed `node` and `npm`
    * Run command: `node --version` (Version should be greater than or equal to `v13.5.0`.)
    * Run command: `npm --version` (Version should be greater than or equal to `6.13.4`.)
* Install Git.
  * If you use a Mac, you can skip this. Apple ships their own fork of `git`.
* Install Gatsby CLI.
  * Run command: `npm install -g gatsby-cli`
* Install Netlify CLI.
  * Run command: `npm install -g netlify-cli`
* Install Docker.
  * Visit [docker.com](https://www.docker.com/) to download a desktop client for Mac.

### 2. Recommended Development Tools
* Terminal: [iTerm2](https://www.iterm2.com/)
* Shell: [Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh)

### 3. Local Development
#### 3.1 Check package health
* Check if there are dependencies not declared in `package.json`.
  * This checks if there are dependencies that are available on your machine but not declared in this package's dependency closure, e.g. dependencies that were installed via `npm install` without specifying the `--save` flag.
  * Run command: `npm prune`
* Check if there are upgradable dependencies.
  * Run command: `npm outdated`
  * To update all dependencies:
    * Run command: `npm update --save/--save-dev`
  * To update a certain dependency:
    * Run command: `npm install <DEPENDENCY_NAME>@latest --save`
    * e.g. `npm install gatsby@latest --save`

#### 3.2 To run the website locally on your machine
* `cd` into the root directory of the website project.
* Run command: `npm install && netlify dev`

#### 3.3 How to test changes locally
* Write tests in NightwatchJS in the `tst` folder.
* Run command: `npm run integ-test-local`

#### 3.4 How to test Netlify build/deploy locally
* For the first time:
  * Run command:
  ```
    docker pull netlify/build
    mkdir netlify_builds
    cd netlify_builds
    git clone https://github.com/netlify/build-image
    cd build-image
    ./test-tools/start-image.sh </path/to/your/repository>
    /opt/build-bin/build npm run build
  ```
* For later attempts:
  * Run command:
  ```
  ./test-tools/start-image.sh </path/to/your/repository>
  /opt/build-bin/build npm run build
  ```

### 4. Publish to Production
Netlify is configured to trigger a deployment once a commit is pushed to GitHub.

* Run command: `git push`
