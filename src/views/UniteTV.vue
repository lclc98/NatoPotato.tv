<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-one-fifth-desktop">
        <div class="card" style="height: 100%; overflow-y: auto;">
          <div class="card-content" style="position: absolute; width: 100%">
            <template v-for="(item, index) in users">
              <div class="box has-pointer"
                   :class="index === selected?'has-box-select':''"
                   v-bind:key="index"
                   @click="onUserClick(index)">
                <article class="level">
                  <div class="level-left">
                    <div class="level-item">
                      <figure class="image is-32x32">
                        <img class="is-rounded" :src="item.logo" alt="Image">
                      </figure>
                    </div>
                    <div class="level-item">
                      <strong>{{item.displayName}}</strong>
                    </div>
                  </div>
                  <div v-if="item.live" class="level-right">
                    <div class="level-item">
                      <span class="icon has-text-danger">
                        <i class="fas fa-circle"></i>
                      </span> {{item.viewers}}
                    </div>
                  </div>
                </article>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="column is-two-fifths-desktop" v-if="selected > -1">
        <div class="card">
          <div class="card-content">
            <article class="level">
              <a :href="`https://www.twitch.tv/${users[selected].username}`">
                <div class="level-left">
                  <div class="level-item">
                    <figure class="image is-32x32">
                      <img class="is-rounded" :src="users[selected].logo" alt="Image">
                    </figure>
                  </div>
                  <div class="level-item">
                    <h1 class="title">{{this.users[selected].displayName}}</h1>
                  </div>
                </div>
              </a>
            </article>
            <div class="aspect-ratio">
              <iframe
                :src="`https://player.twitch.tv/?channel=${users[selected].username}`"
                class="aspect-ratio"
                allowfullscreen="true">
              </iframe>
            </div>
            <br>
            <h6 class="title is-3">UniteTV</h6>
            <pre class="preline is-family-primary">
              Welcome to UniteTV, we are more than a stream team, we are an established loving community of friends and family, run by you guys!

              I have created UniteTV for the soul purpose to give back to you all and to provide you a place where you can make friends, grow your channel with like minded streamers and most importantly, belong.

              <a class="is-size-6 has-text-weight-bold" href="https://goo.gl/forms/DRbjdL3ZjrM0G7hB3">APPLY</a>

              UniteTV is run through Nato’s discord which you can find <a class="is-size-6 has-text-weight-bold" href="https://discord.gg/rTHmTdz">here</a>

              Thank you all for absolutely everything you do, it means the world to me!

              Love NatoPotato.
            </pre>
          </div>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
import TwitchClient from 'twitch';

let twitchClient;

export default {
  name: 'UniteTV',
  metaInfo: {
    title: 'UniteTV',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: 'A stream team',
      },
    ],
    htmlAttrs: {
      lang: 'en',
    },
  },
  data() {
    return {
      users: {},
      selected: -1,
    };
  },
  async mounted() {
    let teamUsers = [];
    await fetch('https://api.twitch.tv/kraken/teams/unitetv', {
      headers: {
        'Client-Id': process.env.VUE_APP_CLIENT_ID,
        accept: 'application/vnd.twitchtv.v5+json',
      },
    })
      .then(value => value.json()
        .then((teamData) => {
          teamUsers = teamData.users;
        }))
      .catch(reason => console.log(reason));
    const userList = Object.keys(teamUsers)
      .map((key) => {
        const value = teamUsers[key];
        return {
          userId: value._id,
          username: value.name,
          displayName: value.display_name,
          logo: value.logo,
          live: false,
        };
      });

    const userId = Object.keys(userList)
      .map(key => userList[key].userId);
    twitchClient = await TwitchClient.withCredentials(process.env.VUE_APP_CLIENT_ID);

    // TODO Rework to allow > 100 users in the team
    const livestreams = await twitchClient.helix.streams.getStreams({ userId })
      .getAll();
    const liveUsers = Object.keys(livestreams)
      .map((key) => {
        const value = livestreams[key];
        return {
          userId: value.userId,
          live: true,
          viewers: value.viewers,
        };
      });
    const liveCount = liveUsers.length;
    const hash = new Map();
    userList.concat(liveUsers)
      .forEach((obj) => {
        hash.set(obj.userId, Object.assign(hash.get(obj.userId) || {}, obj));
      });
    const mergedUsers = Array.from(hash.values());
    mergedUsers.sort((a, b) => {
      if (a.live === b.live) {
        return a.live ? b.viewers - a.viewers : 0;
      }
      return a.live ? -1 : 1;
    });
    this.users = mergedUsers;
    if (liveCount > 0) this.selected = Math.floor(Math.random() * liveCount);
  },
  methods: {
    onUserClick(index) {
      const user = this.users[index];
      if (user.live) {
        this.selected = index;
      } else {
        window.location.href = `https://www.twitch.tv/${user.username}`;
      }
    },
  },
};
</script>

<style scoped>
  .has-box-select {
    background-color: #014963;
  }
</style>
