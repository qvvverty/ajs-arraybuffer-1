export default class Magical {
  constructor() {
    this.baseAttack = 50;
    this.stonedState = false;
    this.distanceToTarget = undefined;
  }

  set stoned(state) {
    this.stonedState = state;
  }

  get stoned() {
    return this.stonedState;
  }

  set attack(attackValue) {
    this.baseAttack = attackValue;
  }

  get attack() {
    const attackNotStoned = this.baseAttack * (1 - this.distanceToTarget / 10);
    if (this.stonedState && this.distanceToTarget > 0) {
      const attackStoned = Math.round(attackNotStoned - Math.log2(this.distanceToTarget) * 5);
      if (attackStoned < 0) {
        return 0;
      }
      return attackStoned;
    }
    return attackNotStoned;
  }
}
