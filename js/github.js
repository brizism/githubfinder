class Github {
  constructor(){
    this.client_id = '877ab5ad70a67cf66c32';
    this.client_secret = 'c05682db2818c8b5655b89149635f75d9911340c';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}