export class FireFlies extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        for (let i = 0; i < 25; i++) {
            this.shadowRoot.innerHTML += '<div class="firefly"></div>'
        }
        this.shadowRoot.innerHTML += `
        <style>
        .firefly {
          position: fixed;
          left: 50%;
          top: 50%;
          width: 0.4vw;
          height: 0.4vw;
          margin: -0.2vw 0 0 9.8vw;
          animation: ease 200s alternate infinite;
          pointer-events: none;
        }
        .firefly::before, .firefly::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transform-origin: -10vw;
        }
        .firefly::before {
          background: transparent;
          opacity: 0.4;
          animation: drift ease alternate infinite;
        }
        .firefly::after {
          background: white;
          opacity: 0;
          box-shadow: 0 0 0 0 blue;
          animation: drift ease alternate infinite, flash ease infinite;
        }
        .firefly:nth-child(1) {
          animation-name: move1;
        }
        .firefly:nth-child(1)::before {
          animation-duration: 12s;
        }
        .firefly:nth-child(1)::after {
          animation-duration: 12s, 7199ms;
          animation-delay: 0ms, 5797ms;
        }
        @keyframes move1 {
          0 {
            transform: translateX(5vw) translateY(-32vh) scale(0.63);
          }
          4.7619047619 {
            transform: translateX(-29vw) translateY(26vh) scale(0.35);
          }
          9.5238095238 {
            transform: translateX(41vw) translateY(-38vh) scale(0.35);
          }
          14.2857142857 {
            transform: translateX(-16vw) translateY(35vh) scale(0.98);
          }
          19.0476190476 {
            transform: translateX(-5vw) translateY(-9vh) scale(0.47);
          }
          23.8095238095 {
            transform: translateX(16vw) translateY(-29vh) scale(0.78);
          }
          28.5714285714 {
            transform: translateX(-29vw) translateY(-20vh) scale(0.99);
          }
          33.3333333333 {
            transform: translateX(-34vw) translateY(5vh) scale(0.62);
          }
          38.0952380952 {
            transform: translateX(-12vw) translateY(12vh) scale(0.83);
          }
          42.8571428571 {
            transform: translateX(-31vw) translateY(-34vh) scale(0.53);
          }
          47.619047619 {
            transform: translateX(-6vw) translateY(2vh) scale(0.55);
          }
          52.380952381 {
            transform: translateX(-4vw) translateY(-18vh) scale(0.26);
          }
          57.1428571429 {
            transform: translateX(44vw) translateY(-37vh) scale(0.4);
          }
          61.9047619048 {
            transform: translateX(-42vw) translateY(20vh) scale(0.74);
          }
          66.6666666667 {
            transform: translateX(34vw) translateY(-18vh) scale(0.37);
          }
          71.4285714286 {
            transform: translateX(-46vw) translateY(44vh) scale(0.64);
          }
          76.1904761905 {
            transform: translateX(-16vw) translateY(21vh) scale(0.74);
          }
          80.9523809524 {
            transform: translateX(40vw) translateY(0vh) scale(0.34);
          }
          85.7142857143 {
            transform: translateX(-47vw) translateY(42vh) scale(1);
          }
          90.4761904762 {
            transform: translateX(11vw) translateY(43vh) scale(0.36);
          }
          95.2380952381 {
            transform: translateX(6vw) translateY(26vh) scale(0.77);
          }
          100 {
            transform: translateX(33vw) translateY(-42vh) scale(0.8);
          }
        }
        .firefly:nth-child(2) {
          animation-name: move2;
        }
        .firefly:nth-child(2)::before {
          animation-duration: 18s;
        }
        .firefly:nth-child(2)::after {
          animation-duration: 18s, 10165ms;
          animation-delay: 0ms, 1989ms;
        }
        @keyframes move2 {
          0 {
            transform: translateX(11vw) translateY(26vh) scale(0.49);
          }
          5.2631578947 {
            transform: translateX(-11vw) translateY(47vh) scale(0.84);
          }
          10.5263157895 {
            transform: translateX(47vw) translateY(22vh) scale(0.73);
          }
          15.7894736842 {
            transform: translateX(-1vw) translateY(-33vh) scale(0.63);
          }
          21.0526315789 {
            transform: translateX(37vw) translateY(-3vh) scale(0.75);
          }
          26.3157894737 {
            transform: translateX(37vw) translateY(-22vh) scale(0.6);
          }
          31.5789473684 {
            transform: translateX(33vw) translateY(11vh) scale(0.57);
          }
          36.8421052632 {
            transform: translateX(-40vw) translateY(-17vh) scale(0.61);
          }
          42.1052631579 {
            transform: translateX(47vw) translateY(14vh) scale(0.93);
          }
          47.3684210526 {
            transform: translateX(19vw) translateY(-21vh) scale(0.65);
          }
          52.6315789474 {
            transform: translateX(-33vw) translateY(3vh) scale(0.34);
          }
          57.8947368421 {
            transform: translateX(-44vw) translateY(50vh) scale(0.5);
          }
          63.1578947368 {
            transform: translateX(40vw) translateY(-45vh) scale(0.63);
          }
          68.4210526316 {
            transform: translateX(27vw) translateY(9vh) scale(0.43);
          }
          73.6842105263 {
            transform: translateX(27vw) translateY(-2vh) scale(0.72);
          }
          78.9473684211 {
            transform: translateX(-4vw) translateY(-7vh) scale(0.74);
          }
          84.2105263158 {
            transform: translateX(41vw) translateY(2vh) scale(0.96);
          }
          89.4736842105 {
            transform: translateX(27vw) translateY(23vh) scale(0.9);
          }
          94.7368421053 {
            transform: translateX(6vw) translateY(-19vh) scale(0.48);
          }
          100 {
            transform: translateX(-2vw) translateY(0vh) scale(0.96);
          }
        }
        .firefly:nth-child(3) {
          animation-name: move3;
        }
        .firefly:nth-child(3)::before {
          animation-duration: 9s;
        }
        .firefly:nth-child(3)::after {
          animation-duration: 9s, 5938ms;
          animation-delay: 0ms, 1173ms;
        }
        @keyframes move3 {
          0 {
            transform: translateX(13vw) translateY(-23vh) scale(1);
          }
          4 {
            transform: translateX(20vw) translateY(-47vh) scale(0.58);
          }
          8 {
            transform: translateX(-49vw) translateY(-19vh) scale(0.37);
          }
          12 {
            transform: translateX(-20vw) translateY(-25vh) scale(0.32);
          }
          16 {
            transform: translateX(-6vw) translateY(-39vh) scale(0.5);
          }
          20 {
            transform: translateX(-9vw) translateY(10vh) scale(0.83);
          }
          24 {
            transform: translateX(5vw) translateY(3vh) scale(0.7);
          }
          28 {
            transform: translateX(13vw) translateY(32vh) scale(1);
          }
          32 {
            transform: translateX(19vw) translateY(13vh) scale(0.56);
          }
          36 {
            transform: translateX(-37vw) translateY(14vh) scale(0.66);
          }
          40 {
            transform: translateX(-12vw) translateY(48vh) scale(0.81);
          }
          44 {
            transform: translateX(-40vw) translateY(6vh) scale(0.42);
          }
          48 {
            transform: translateX(-3vw) translateY(39vh) scale(0.55);
          }
          52 {
            transform: translateX(-29vw) translateY(-27vh) scale(0.48);
          }
          56 {
            transform: translateX(-26vw) translateY(-15vh) scale(0.74);
          }
          60 {
            transform: translateX(-16vw) translateY(-43vh) scale(0.89);
          }
          64 {
            transform: translateX(17vw) translateY(-48vh) scale(0.46);
          }
          68 {
            transform: translateX(11vw) translateY(-38vh) scale(0.33);
          }
          72 {
            transform: translateX(5vw) translateY(-3vh) scale(0.53);
          }
          76 {
            transform: translateX(16vw) translateY(-44vh) scale(0.75);
          }
          80 {
            transform: translateX(-12vw) translateY(-28vh) scale(0.8);
          }
          84 {
            transform: translateX(-12vw) translateY(14vh) scale(0.56);
          }
          88 {
            transform: translateX(4vw) translateY(13vh) scale(0.31);
          }
          92 {
            transform: translateX(-22vw) translateY(22vh) scale(0.33);
          }
          96 {
            transform: translateX(-5vw) translateY(22vh) scale(1);
          }
          100 {
            transform: translateX(21vw) translateY(-24vh) scale(0.55);
          }
        }
        .firefly:nth-child(4) {
          animation-name: move4;
        }
        .firefly:nth-child(4)::before {
          animation-duration: 14s;
        }
        .firefly:nth-child(4)::after {
          animation-duration: 14s, 8531ms;
          animation-delay: 0ms, 3118ms;
        }
        @keyframes move4 {
          0 {
            transform: translateX(12vw) translateY(8vh) scale(0.36);
          }
          5.2631578947 {
            transform: translateX(3vw) translateY(23vh) scale(0.69);
          }
          10.5263157895 {
            transform: translateX(10vw) translateY(49vh) scale(0.53);
          }
          15.7894736842 {
            transform: translateX(31vw) translateY(-10vh) scale(0.43);
          }
          21.0526315789 {
            transform: translateX(-38vw) translateY(16vh) scale(0.56);
          }
          26.3157894737 {
            transform: translateX(-7vw) translateY(-27vh) scale(0.71);
          }
          31.5789473684 {
            transform: translateX(39vw) translateY(-4vh) scale(0.88);
          }
          36.8421052632 {
            transform: translateX(-8vw) translateY(0vh) scale(0.56);
          }
          42.1052631579 {
            transform: translateX(40vw) translateY(19vh) scale(0.69);
          }
          47.3684210526 {
            transform: translateX(43vw) translateY(47vh) scale(0.94);
          }
          52.6315789474 {
            transform: translateX(-36vw) translateY(-31vh) scale(0.62);
          }
          57.8947368421 {
            transform: translateX(26vw) translateY(-2vh) scale(0.62);
          }
          63.1578947368 {
            transform: translateX(19vw) translateY(-30vh) scale(0.91);
          }
          68.4210526316 {
            transform: translateX(23vw) translateY(-9vh) scale(0.57);
          }
          73.6842105263 {
            transform: translateX(-8vw) translateY(1vh) scale(0.64);
          }
          78.9473684211 {
            transform: translateX(20vw) translateY(31vh) scale(0.37);
          }
          84.2105263158 {
            transform: translateX(43vw) translateY(21vh) scale(0.43);
          }
          89.4736842105 {
            transform: translateX(17vw) translateY(-14vh) scale(0.85);
          }
          94.7368421053 {
            transform: translateX(50vw) translateY(-16vh) scale(0.63);
          }
          100 {
            transform: translateX(31vw) translateY(17vh) scale(0.47);
          }
        }
        .firefly:nth-child(5) {
          animation-name: move5;
        }
        .firefly:nth-child(5)::before {
          animation-duration: 17s;
        }
        .firefly:nth-child(5)::after {
          animation-duration: 17s, 8739ms;
          animation-delay: 0ms, 7237ms;
        }
        @keyframes move5 {
          0 {
            transform: translateX(-15vw) translateY(6vh) scale(0.47);
          }
          4.5454545455 {
            transform: translateX(7vw) translateY(-21vh) scale(0.76);
          }
          9.0909090909 {
            transform: translateX(20vw) translateY(47vh) scale(0.97);
          }
          13.6363636364 {
            transform: translateX(28vw) translateY(-38vh) scale(0.32);
          }
          18.1818181818 {
            transform: translateX(-33vw) translateY(-36vh) scale(0.68);
          }
          22.7272727273 {
            transform: translateX(-35vw) translateY(11vh) scale(0.37);
          }
          27.2727272727 {
            transform: translateX(-18vw) translateY(19vh) scale(0.53);
          }
          31.8181818182 {
            transform: translateX(32vw) translateY(19vh) scale(0.73);
          }
          36.3636363636 {
            transform: translateX(-8vw) translateY(-38vh) scale(0.6);
          }
          40.9090909091 {
            transform: translateX(12vw) translateY(29vh) scale(0.34);
          }
          45.4545454545 {
            transform: translateX(8vw) translateY(37vh) scale(0.91);
          }
          50 {
            transform: translateX(16vw) translateY(12vh) scale(0.91);
          }
          54.5454545455 {
            transform: translateX(-25vw) translateY(24vh) scale(0.33);
          }
          59.0909090909 {
            transform: translateX(20vw) translateY(-23vh) scale(0.43);
          }
          63.6363636364 {
            transform: translateX(-31vw) translateY(-5vh) scale(0.39);
          }
          68.1818181818 {
            transform: translateX(14vw) translateY(39vh) scale(0.85);
          }
          72.7272727273 {
            transform: translateX(31vw) translateY(-7vh) scale(0.54);
          }
          77.2727272727 {
            transform: translateX(-34vw) translateY(-20vh) scale(0.85);
          }
          81.8181818182 {
            transform: translateX(33vw) translateY(19vh) scale(0.37);
          }
          86.3636363636 {
            transform: translateX(38vw) translateY(-41vh) scale(0.42);
          }
          90.9090909091 {
            transform: translateX(-6vw) translateY(-7vh) scale(0.36);
          }
          95.4545454545 {
            transform: translateX(-23vw) translateY(-12vh) scale(0.37);
          }
          100 {
            transform: translateX(1vw) translateY(-28vh) scale(0.87);
          }
        }
        .firefly:nth-child(6) {
          animation-name: move6;
        }
        .firefly:nth-child(6)::before {
          animation-duration: 16s;
        }
        .firefly:nth-child(6)::after {
          animation-duration: 16s, 10992ms;
          animation-delay: 0ms, 4498ms;
        }
        @keyframes move6 {
          0 {
            transform: translateX(16vw) translateY(-20vh) scale(0.28);
          }
          4.347826087 {
            transform: translateX(-31vw) translateY(44vh) scale(0.89);
          }
          8.6956521739 {
            transform: translateX(1vw) translateY(-8vh) scale(0.31);
          }
          13.0434782609 {
            transform: translateX(-5vw) translateY(-34vh) scale(0.38);
          }
          17.3913043478 {
            transform: translateX(-14vw) translateY(-21vh) scale(0.81);
          }
          21.7391304348 {
            transform: translateX(46vw) translateY(36vh) scale(0.74);
          }
          26.0869565217 {
            transform: translateX(-10vw) translateY(36vh) scale(0.78);
          }
          30.4347826087 {
            transform: translateX(-2vw) translateY(-23vh) scale(0.34);
          }
          34.7826086957 {
            transform: translateX(17vw) translateY(-49vh) scale(0.32);
          }
          39.1304347826 {
            transform: translateX(-38vw) translateY(-4vh) scale(0.77);
          }
          43.4782608696 {
            transform: translateX(-23vw) translateY(-25vh) scale(0.68);
          }
          47.8260869565 {
            transform: translateX(3vw) translateY(-35vh) scale(0.87);
          }
          52.1739130435 {
            transform: translateX(-5vw) translateY(47vh) scale(0.7);
          }
          56.5217391304 {
            transform: translateX(-36vw) translateY(8vh) scale(0.76);
          }
          60.8695652174 {
            transform: translateX(-49vw) translateY(-29vh) scale(0.73);
          }
          65.2173913043 {
            transform: translateX(-19vw) translateY(-45vh) scale(0.28);
          }
          69.5652173913 {
            transform: translateX(7vw) translateY(-38vh) scale(0.49);
          }
          73.9130434783 {
            transform: translateX(6vw) translateY(7vh) scale(0.37);
          }
          78.2608695652 {
            transform: translateX(-40vw) translateY(-44vh) scale(0.56);
          }
          82.6086956522 {
            transform: translateX(46vw) translateY(-44vh) scale(0.54);
          }
          86.9565217391 {
            transform: translateX(-9vw) translateY(48vh) scale(0.58);
          }
          91.3043478261 {
            transform: translateX(5vw) translateY(-3vh) scale(0.38);
          }
          95.652173913 {
            transform: translateX(-2vw) translateY(-2vh) scale(0.38);
          }
          100 {
            transform: translateX(46vw) translateY(-16vh) scale(0.28);
          }
        }
        .firefly:nth-child(7) {
          animation-name: move7;
        }
        .firefly:nth-child(7)::before {
          animation-duration: 15s;
        }
        .firefly:nth-child(7)::after {
          animation-duration: 15s, 8033ms;
          animation-delay: 0ms, 3445ms;
        }
        @keyframes move7 {
          0 {
            transform: translateX(-35vw) translateY(36vh) scale(0.45);
          }
          5.2631578947 {
            transform: translateX(-22vw) translateY(32vh) scale(0.74);
          }
          10.5263157895 {
            transform: translateX(-30vw) translateY(27vh) scale(0.28);
          }
          15.7894736842 {
            transform: translateX(-35vw) translateY(29vh) scale(0.5);
          }
          21.0526315789 {
            transform: translateX(-14vw) translateY(-6vh) scale(0.92);
          }
          26.3157894737 {
            transform: translateX(40vw) translateY(-1vh) scale(0.46);
          }
          31.5789473684 {
            transform: translateX(16vw) translateY(-7vh) scale(0.9);
          }
          36.8421052632 {
            transform: translateX(34vw) translateY(14vh) scale(0.65);
          }
          42.1052631579 {
            transform: translateX(18vw) translateY(-44vh) scale(0.29);
          }
          47.3684210526 {
            transform: translateX(-49vw) translateY(-25vh) scale(0.95);
          }
          52.6315789474 {
            transform: translateX(34vw) translateY(-35vh) scale(0.7);
          }
          57.8947368421 {
            transform: translateX(-4vw) translateY(-30vh) scale(0.4);
          }
          63.1578947368 {
            transform: translateX(42vw) translateY(-21vh) scale(0.97);
          }
          68.4210526316 {
            transform: translateX(-1vw) translateY(-44vh) scale(0.75);
          }
          73.6842105263 {
            transform: translateX(-13vw) translateY(10vh) scale(0.79);
          }
          78.9473684211 {
            transform: translateX(24vw) translateY(-22vh) scale(0.93);
          }
          84.2105263158 {
            transform: translateX(-21vw) translateY(-8vh) scale(0.71);
          }
          89.4736842105 {
            transform: translateX(-17vw) translateY(-36vh) scale(0.62);
          }
          94.7368421053 {
            transform: translateX(37vw) translateY(-47vh) scale(0.59);
          }
          100 {
            transform: translateX(-31vw) translateY(20vh) scale(0.61);
          }
        }
        .firefly:nth-child(8) {
          animation-name: move8;
        }
        .firefly:nth-child(8)::before {
          animation-duration: 15s;
        }
        .firefly:nth-child(8)::after {
          animation-duration: 15s, 10686ms;
          animation-delay: 0ms, 1473ms;
        }
        @keyframes move8 {
          0 {
            transform: translateX(-8vw) translateY(6vh) scale(0.54);
          }
          4.7619047619 {
            transform: translateX(42vw) translateY(36vh) scale(0.81);
          }
          9.5238095238 {
            transform: translateX(-8vw) translateY(-6vh) scale(0.39);
          }
          14.2857142857 {
            transform: translateX(-44vw) translateY(37vh) scale(0.26);
          }
          19.0476190476 {
            transform: translateX(-44vw) translateY(23vh) scale(0.43);
          }
          23.8095238095 {
            transform: translateX(17vw) translateY(-30vh) scale(0.78);
          }
          28.5714285714 {
            transform: translateX(46vw) translateY(-35vh) scale(0.93);
          }
          33.3333333333 {
            transform: translateX(7vw) translateY(42vh) scale(0.77);
          }
          38.0952380952 {
            transform: translateX(-35vw) translateY(41vh) scale(0.58);
          }
          42.8571428571 {
            transform: translateX(-26vw) translateY(37vh) scale(0.81);
          }
          47.619047619 {
            transform: translateX(11vw) translateY(-39vh) scale(0.94);
          }
          52.380952381 {
            transform: translateX(-20vw) translateY(-44vh) scale(0.95);
          }
          57.1428571429 {
            transform: translateX(24vw) translateY(4vh) scale(0.7);
          }
          61.9047619048 {
            transform: translateX(31vw) translateY(25vh) scale(0.61);
          }
          66.6666666667 {
            transform: translateX(-14vw) translateY(-49vh) scale(0.28);
          }
          71.4285714286 {
            transform: translateX(-39vw) translateY(-8vh) scale(0.73);
          }
          76.1904761905 {
            transform: translateX(-47vw) translateY(-45vh) scale(0.7);
          }
          80.9523809524 {
            transform: translateX(48vw) translateY(-49vh) scale(1);
          }
          85.7142857143 {
            transform: translateX(35vw) translateY(21vh) scale(0.5);
          }
          90.4761904762 {
            transform: translateX(-1vw) translateY(8vh) scale(0.71);
          }
          95.2380952381 {
            transform: translateX(19vw) translateY(12vh) scale(0.98);
          }
          100 {
            transform: translateX(-6vw) translateY(-25vh) scale(0.4);
          }
        }
        .firefly:nth-child(9) {
          animation-name: move9;
        }
        .firefly:nth-child(9)::before {
          animation-duration: 9s;
        }
        .firefly:nth-child(9)::after {
          animation-duration: 9s, 5072ms;
          animation-delay: 0ms, 3872ms;
        }
        @keyframes move9 {
          0 {
            transform: translateX(48vw) translateY(47vh) scale(0.34);
          }
          3.5714285714 {
            transform: translateX(3vw) translateY(43vh) scale(0.64);
          }
          7.1428571429 {
            transform: translateX(-17vw) translateY(37vh) scale(0.67);
          }
          10.7142857143 {
            transform: translateX(36vw) translateY(-40vh) scale(0.84);
          }
          14.2857142857 {
            transform: translateX(42vw) translateY(35vh) scale(0.77);
          }
          17.8571428571 {
            transform: translateX(4vw) translateY(46vh) scale(0.87);
          }
          21.4285714286 {
            transform: translateX(36vw) translateY(-13vh) scale(0.72);
          }
          25 {
            transform: translateX(19vw) translateY(-46vh) scale(0.94);
          }
          28.5714285714 {
            transform: translateX(42vw) translateY(-32vh) scale(0.45);
          }
          32.1428571429 {
            transform: translateX(46vw) translateY(9vh) scale(0.4);
          }
          35.7142857143 {
            transform: translateX(26vw) translateY(10vh) scale(0.51);
          }
          39.2857142857 {
            transform: translateX(46vw) translateY(-31vh) scale(0.79);
          }
          42.8571428571 {
            transform: translateX(10vw) translateY(11vh) scale(0.6);
          }
          46.4285714286 {
            transform: translateX(-13vw) translateY(1vh) scale(0.95);
          }
          50 {
            transform: translateX(22vw) translateY(34vh) scale(0.28);
          }
          53.5714285714 {
            transform: translateX(-45vw) translateY(25vh) scale(0.39);
          }
          57.1428571429 {
            transform: translateX(43vw) translateY(-44vh) scale(0.77);
          }
          60.7142857143 {
            transform: translateX(-17vw) translateY(-7vh) scale(0.54);
          }
          64.2857142857 {
            transform: translateX(34vw) translateY(0vh) scale(0.93);
          }
          67.8571428571 {
            transform: translateX(-39vw) translateY(-19vh) scale(0.88);
          }
          71.4285714286 {
            transform: translateX(16vw) translateY(39vh) scale(0.94);
          }
          75 {
            transform: translateX(4vw) translateY(-45vh) scale(0.51);
          }
          78.5714285714 {
            transform: translateX(-43vw) translateY(-7vh) scale(0.49);
          }
          82.1428571429 {
            transform: translateX(11vw) translateY(-34vh) scale(0.3);
          }
          85.7142857143 {
            transform: translateX(-15vw) translateY(-4vh) scale(0.42);
          }
          89.2857142857 {
            transform: translateX(-42vw) translateY(21vh) scale(0.42);
          }
          92.8571428571 {
            transform: translateX(27vw) translateY(23vh) scale(0.79);
          }
          96.4285714286 {
            transform: translateX(47vw) translateY(-48vh) scale(0.7);
          }
          100 {
            transform: translateX(-28vw) translateY(-9vh) scale(0.28);
          }
        }
        .firefly:nth-child(10) {
          animation-name: move10;
        }
        .firefly:nth-child(10)::before {
          animation-duration: 18s;
        }
        .firefly:nth-child(10)::after {
          animation-duration: 18s, 8851ms;
          animation-delay: 0ms, 4139ms;
        }
        @keyframes move10 {
          0 {
            transform: translateX(26vw) translateY(-9vh) scale(0.59);
          }
          3.7037037037 {
            transform: translateX(-14vw) translateY(43vh) scale(0.27);
          }
          7.4074074074 {
            transform: translateX(32vw) translateY(43vh) scale(0.79);
          }
          11.1111111111 {
            transform: translateX(-46vw) translateY(41vh) scale(0.68);
          }
          14.8148148148 {
            transform: translateX(-30vw) translateY(29vh) scale(0.45);
          }
          18.5185185185 {
            transform: translateX(-36vw) translateY(25vh) scale(0.39);
          }
          22.2222222222 {
            transform: translateX(10vw) translateY(-5vh) scale(0.65);
          }
          25.9259259259 {
            transform: translateX(-44vw) translateY(23vh) scale(0.89);
          }
          29.6296296296 {
            transform: translateX(-6vw) translateY(18vh) scale(0.87);
          }
          33.3333333333 {
            transform: translateX(-9vw) translateY(-18vh) scale(0.79);
          }
          37.037037037 {
            transform: translateX(40vw) translateY(8vh) scale(0.7);
          }
          40.7407407407 {
            transform: translateX(31vw) translateY(0vh) scale(0.84);
          }
          44.4444444444 {
            transform: translateX(34vw) translateY(-42vh) scale(0.43);
          }
          48.1481481481 {
            transform: translateX(40vw) translateY(50vh) scale(0.66);
          }
          51.8518518519 {
            transform: translateX(17vw) translateY(6vh) scale(0.58);
          }
          55.5555555556 {
            transform: translateX(16vw) translateY(-5vh) scale(0.32);
          }
          59.2592592593 {
            transform: translateX(-31vw) translateY(34vh) scale(0.55);
          }
          62.962962963 {
            transform: translateX(7vw) translateY(50vh) scale(0.74);
          }
          66.6666666667 {
            transform: translateX(44vw) translateY(-22vh) scale(1);
          }
          70.3703703704 {
            transform: translateX(22vw) translateY(-23vh) scale(0.85);
          }
          74.0740740741 {
            transform: translateX(-8vw) translateY(5vh) scale(0.55);
          }
          77.7777777778 {
            transform: translateX(5vw) translateY(39vh) scale(0.36);
          }
          81.4814814815 {
            transform: translateX(3vw) translateY(-1vh) scale(0.88);
          }
          85.1851851852 {
            transform: translateX(39vw) translateY(24vh) scale(0.52);
          }
          88.8888888889 {
            transform: translateX(-39vw) translateY(-35vh) scale(0.53);
          }
          92.5925925926 {
            transform: translateX(-8vw) translateY(-24vh) scale(0.33);
          }
          96.2962962963 {
            transform: translateX(-35vw) translateY(-44vh) scale(0.62);
          }
          100 {
            transform: translateX(30vw) translateY(2vh) scale(0.31);
          }
        }
        .firefly:nth-child(11) {
          animation-name: move11;
        }
        .firefly:nth-child(11)::before {
          animation-duration: 9s;
        }
        .firefly:nth-child(11)::after {
          animation-duration: 9s, 5205ms;
          animation-delay: 0ms, 7976ms;
        }
        @keyframes move11 {
          0 {
            transform: translateX(23vw) translateY(-21vh) scale(0.77);
          }
          5.2631578947 {
            transform: translateX(-17vw) translateY(-4vh) scale(0.92);
          }
          10.5263157895 {
            transform: translateX(-12vw) translateY(-26vh) scale(0.31);
          }
          15.7894736842 {
            transform: translateX(11vw) translateY(9vh) scale(0.31);
          }
          21.0526315789 {
            transform: translateX(5vw) translateY(36vh) scale(0.63);
          }
          26.3157894737 {
            transform: translateX(-40vw) translateY(-44vh) scale(0.8);
          }
          31.5789473684 {
            transform: translateX(-19vw) translateY(-15vh) scale(0.48);
          }
          36.8421052632 {
            transform: translateX(34vw) translateY(48vh) scale(0.29);
          }
          42.1052631579 {
            transform: translateX(32vw) translateY(18vh) scale(0.41);
          }
          47.3684210526 {
            transform: translateX(-24vw) translateY(40vh) scale(0.65);
          }
          52.6315789474 {
            transform: translateX(-10vw) translateY(-8vh) scale(0.65);
          }
          57.8947368421 {
            transform: translateX(-2vw) translateY(21vh) scale(0.5);
          }
          63.1578947368 {
            transform: translateX(35vw) translateY(2vh) scale(0.3);
          }
          68.4210526316 {
            transform: translateX(-26vw) translateY(37vh) scale(0.78);
          }
          73.6842105263 {
            transform: translateX(3vw) translateY(7vh) scale(0.26);
          }
          78.9473684211 {
            transform: translateX(2vw) translateY(-26vh) scale(0.5);
          }
          84.2105263158 {
            transform: translateX(-48vw) translateY(8vh) scale(0.97);
          }
          89.4736842105 {
            transform: translateX(-25vw) translateY(-15vh) scale(0.47);
          }
          94.7368421053 {
            transform: translateX(21vw) translateY(-30vh) scale(0.39);
          }
          100 {
            transform: translateX(36vw) translateY(4vh) scale(0.28);
          }
        }
        .firefly:nth-child(12) {
          animation-name: move12;
        }
        .firefly:nth-child(12)::before {
          animation-duration: 17s;
        }
        .firefly:nth-child(12)::after {
          animation-duration: 17s, 9187ms;
          animation-delay: 0ms, 4838ms;
        }
        @keyframes move12 {
          0 {
            transform: translateX(-17vw) translateY(-26vh) scale(0.57);
          }
          5.5555555556 {
            transform: translateX(32vw) translateY(-10vh) scale(0.27);
          }
          11.1111111111 {
            transform: translateX(-23vw) translateY(1vh) scale(0.68);
          }
          16.6666666667 {
            transform: translateX(-16vw) translateY(2vh) scale(0.68);
          }
          22.2222222222 {
            transform: translateX(22vw) translateY(20vh) scale(0.73);
          }
          27.7777777778 {
            transform: translateX(-31vw) translateY(-14vh) scale(0.59);
          }
          33.3333333333 {
            transform: translateX(-14vw) translateY(24vh) scale(0.72);
          }
          38.8888888889 {
            transform: translateX(21vw) translateY(-17vh) scale(0.9);
          }
          44.4444444444 {
            transform: translateX(19vw) translateY(-39vh) scale(0.82);
          }
          50 {
            transform: translateX(12vw) translateY(47vh) scale(0.88);
          }
          55.5555555556 {
            transform: translateX(-36vw) translateY(-22vh) scale(0.31);
          }
          61.1111111111 {
            transform: translateX(-46vw) translateY(5vh) scale(0.97);
          }
          66.6666666667 {
            transform: translateX(-25vw) translateY(-36vh) scale(0.75);
          }
          72.2222222222 {
            transform: translateX(-40vw) translateY(10vh) scale(0.84);
          }
          77.7777777778 {
            transform: translateX(50vw) translateY(25vh) scale(0.69);
          }
          83.3333333333 {
            transform: translateX(-49vw) translateY(-35vh) scale(0.5);
          }
          88.8888888889 {
            transform: translateX(9vw) translateY(35vh) scale(0.41);
          }
          94.4444444444 {
            transform: translateX(5vw) translateY(-31vh) scale(0.57);
          }
          100 {
            transform: translateX(5vw) translateY(-10vh) scale(0.31);
          }
        }
        .firefly:nth-child(13) {
          animation-name: move13;
        }
        .firefly:nth-child(13)::before {
          animation-duration: 16s;
        }
        .firefly:nth-child(13)::after {
          animation-duration: 16s, 9816ms;
          animation-delay: 0ms, 2590ms;
        }
        @keyframes move13 {
          0 {
            transform: translateX(46vw) translateY(-22vh) scale(0.73);
          }
          4.347826087 {
            transform: translateX(38vw) translateY(-12vh) scale(0.95);
          }
          8.6956521739 {
            transform: translateX(26vw) translateY(13vh) scale(0.95);
          }
          13.0434782609 {
            transform: translateX(16vw) translateY(-43vh) scale(0.64);
          }
          17.3913043478 {
            transform: translateX(-6vw) translateY(-21vh) scale(0.8);
          }
          21.7391304348 {
            transform: translateX(45vw) translateY(12vh) scale(0.73);
          }
          26.0869565217 {
            transform: translateX(-6vw) translateY(-19vh) scale(0.8);
          }
          30.4347826087 {
            transform: translateX(20vw) translateY(-43vh) scale(0.4);
          }
          34.7826086957 {
            transform: translateX(44vw) translateY(-21vh) scale(0.36);
          }
          39.1304347826 {
            transform: translateX(-13vw) translateY(-43vh) scale(0.99);
          }
          43.4782608696 {
            transform: translateX(47vw) translateY(50vh) scale(0.61);
          }
          47.8260869565 {
            transform: translateX(-48vw) translateY(12vh) scale(0.96);
          }
          52.1739130435 {
            transform: translateX(14vw) translateY(37vh) scale(0.61);
          }
          56.5217391304 {
            transform: translateX(43vw) translateY(-11vh) scale(0.29);
          }
          60.8695652174 {
            transform: translateX(44vw) translateY(-30vh) scale(0.93);
          }
          65.2173913043 {
            transform: translateX(-33vw) translateY(28vh) scale(0.7);
          }
          69.5652173913 {
            transform: translateX(-19vw) translateY(32vh) scale(0.66);
          }
          73.9130434783 {
            transform: translateX(-1vw) translateY(10vh) scale(0.57);
          }
          78.2608695652 {
            transform: translateX(-24vw) translateY(46vh) scale(0.45);
          }
          82.6086956522 {
            transform: translateX(30vw) translateY(46vh) scale(0.61);
          }
          86.9565217391 {
            transform: translateX(-5vw) translateY(34vh) scale(0.52);
          }
          91.3043478261 {
            transform: translateX(-27vw) translateY(-4vh) scale(0.32);
          }
          95.652173913 {
            transform: translateX(-32vw) translateY(30vh) scale(0.8);
          }
          100 {
            transform: translateX(-39vw) translateY(-15vh) scale(0.73);
          }
        }
        .firefly:nth-child(14) {
          animation-name: move14;
        }
        .firefly:nth-child(14)::before {
          animation-duration: 14s;
        }
        .firefly:nth-child(14)::after {
          animation-duration: 14s, 9855ms;
          animation-delay: 0ms, 5626ms;
        }
        @keyframes move14 {
          0 {
            transform: translateX(10vw) translateY(39vh) scale(0.36);
          }
          3.8461538462 {
            transform: translateX(-41vw) translateY(17vh) scale(0.56);
          }
          7.6923076923 {
            transform: translateX(-43vw) translateY(49vh) scale(0.55);
          }
          11.5384615385 {
            transform: translateX(-43vw) translateY(-9vh) scale(0.77);
          }
          15.3846153846 {
            transform: translateX(-18vw) translateY(50vh) scale(0.69);
          }
          19.2307692308 {
            transform: translateX(-20vw) translateY(20vh) scale(0.99);
          }
          23.0769230769 {
            transform: translateX(-14vw) translateY(-47vh) scale(0.7);
          }
          26.9230769231 {
            transform: translateX(-40vw) translateY(48vh) scale(0.42);
          }
          30.7692307692 {
            transform: translateX(35vw) translateY(7vh) scale(0.44);
          }
          34.6153846154 {
            transform: translateX(-9vw) translateY(-10vh) scale(0.35);
          }
          38.4615384615 {
            transform: translateX(-29vw) translateY(-5vh) scale(0.35);
          }
          42.3076923077 {
            transform: translateX(19vw) translateY(34vh) scale(0.46);
          }
          46.1538461538 {
            transform: translateX(22vw) translateY(-42vh) scale(0.47);
          }
          50 {
            transform: translateX(-30vw) translateY(-31vh) scale(0.28);
          }
          53.8461538462 {
            transform: translateX(24vw) translateY(-32vh) scale(0.26);
          }
          57.6923076923 {
            transform: translateX(-23vw) translateY(17vh) scale(0.77);
          }
          61.5384615385 {
            transform: translateX(12vw) translateY(-22vh) scale(0.9);
          }
          65.3846153846 {
            transform: translateX(-2vw) translateY(41vh) scale(0.38);
          }
          69.2307692308 {
            transform: translateX(47vw) translateY(-39vh) scale(0.43);
          }
          73.0769230769 {
            transform: translateX(-46vw) translateY(-34vh) scale(0.85);
          }
          76.9230769231 {
            transform: translateX(6vw) translateY(22vh) scale(0.63);
          }
          80.7692307692 {
            transform: translateX(11vw) translateY(42vh) scale(0.8);
          }
          84.6153846154 {
            transform: translateX(-32vw) translateY(-23vh) scale(0.82);
          }
          88.4615384615 {
            transform: translateX(-12vw) translateY(-46vh) scale(0.38);
          }
          92.3076923077 {
            transform: translateX(27vw) translateY(-3vh) scale(0.99);
          }
          96.1538461538 {
            transform: translateX(-48vw) translateY(17vh) scale(0.66);
          }
          100 {
            transform: translateX(-45vw) translateY(-34vh) scale(0.65);
          }
        }
        .firefly:nth-child(15) {
          animation-name: move15;
        }
        .firefly:nth-child(15)::before {
          animation-duration: 13s;
        }
        .firefly:nth-child(15)::after {
          animation-duration: 13s, 9224ms;
          animation-delay: 0ms, 6615ms;
        }
        @keyframes move15 {
          0 {
            transform: translateX(48vw) translateY(6vh) scale(0.99);
          }
          5.5555555556 {
            transform: translateX(-40vw) translateY(-38vh) scale(0.89);
          }
          11.1111111111 {
            transform: translateX(50vw) translateY(-47vh) scale(0.94);
          }
          16.6666666667 {
            transform: translateX(-35vw) translateY(29vh) scale(0.72);
          }
          22.2222222222 {
            transform: translateX(0vw) translateY(1vh) scale(0.4);
          }
          27.7777777778 {
            transform: translateX(50vw) translateY(-14vh) scale(0.27);
          }
          33.3333333333 {
            transform: translateX(-39vw) translateY(25vh) scale(0.59);
          }
          38.8888888889 {
            transform: translateX(-10vw) translateY(23vh) scale(0.89);
          }
          44.4444444444 {
            transform: translateX(-25vw) translateY(-27vh) scale(0.64);
          }
          50 {
            transform: translateX(46vw) translateY(10vh) scale(0.7);
          }
          55.5555555556 {
            transform: translateX(36vw) translateY(-38vh) scale(0.98);
          }
          61.1111111111 {
            transform: translateX(-36vw) translateY(36vh) scale(0.96);
          }
          66.6666666667 {
            transform: translateX(-6vw) translateY(45vh) scale(0.78);
          }
          72.2222222222 {
            transform: translateX(16vw) translateY(-35vh) scale(0.43);
          }
          77.7777777778 {
            transform: translateX(-34vw) translateY(-29vh) scale(0.88);
          }
          83.3333333333 {
            transform: translateX(-5vw) translateY(0vh) scale(0.29);
          }
          88.8888888889 {
            transform: translateX(-37vw) translateY(-44vh) scale(0.61);
          }
          94.4444444444 {
            transform: translateX(42vw) translateY(32vh) scale(0.84);
          }
          100 {
            transform: translateX(3vw) translateY(7vh) scale(0.49);
          }
        }
        @keyframes drift {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes flash {
          0%, 30%, 100% {
            opacity: 0;
            box-shadow: 0 0 0 0 blue;
          }
          5% {
            opacity: 1;
            box-shadow: 0 0 2vw 0.4vw blue;
          }
        }

        </style>
        
        `
    }
}

customElements.define('fire-flies', FireFlies)