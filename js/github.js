class Github {
  constructor(){
    this.client_id = '877ab5ad70a67cf66c32';
    this.client_secret = '5ef5c5fa435257a762cf90cafa8c0c63453f6761';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}