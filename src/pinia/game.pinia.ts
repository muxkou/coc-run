import { defineStore } from 'pinia'

export interface PlayerData {
  info: {
    name: string
    player: string
    career: number
    age: number
    avatar: string
  },
  attributes: {
    str: number
    con: number
    siz: number
    dex: number
    app: number
    int: number
    pow: number
    edu: number
    luc: number
    mov: number
  },
  status: {
    hp: {
      total: number
      now: number
    },
    san: {
      total: number,
      now: number,
      brain: string
    }
  }
}

interface MxGamePiniaState {
  players: Array<PlayerData>
  avatars: Array<any>
}

export const useGameStore = defineStore('mx-global', {
  state: (): MxGamePiniaState => {
    return {
      players: [],
      avatars: []
    };
  }
});