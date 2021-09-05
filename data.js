// local reviews data
const reviews = [
    {
      id: 1,
      name: "Neeraj Chopra",
      job: "Gold",
      img:
        "images/dc-Cover-3s4emo0p0iukm01qsqk79gbua5-20210808020806.Medi.jpeg",
      text:
        "Neeraj Chopra VSM (born 24 December 1997) is an Indian track and field athlete who competes in the javelin throw. As of August 2021, he is ranked second internationally by World Athletics. A Junior Commissioned Officer (JCO) in the Indian Army, Chopra is the first track and field athlete to win a gold medal for India at the Olympics.[6] He is also the first track and field athlete from India to win at the IAAF World U20 Championships, where in 2016 he achieved a world under-20 record throw of 86.48 m, becoming the first Indian athlete to set a world record.Chopra participated in the 2018 Commonwealth Games and the 2018 Asian Games, serving as the flag-bearer in the latter and winning gold medals in both. In his debut at the 2020 Tokyo Olympics, Chopra won the gold medal on 7 August 2021 with a throw of 87.58 m in his second attempt. As of 2021, he is one of only two Indians to have won an individual Olympic gold medal (the other being Abhinav Bindra), as well as the youngest-ever Indian Olympic gold medalist in an individual event and the only one to have won gold in his Olympic debut.",
    },
    {
      id: 2,
      name: "Ravi Kumar Dahiya",
      job: "Silver",
      img:
        "images/Ravi Kumar Dahiya.jpg",
      text:
        "Ravi Kumar Dahiya is an Indian wrestler from Haryana’s Nahri village in Sonipat district. The 23-year old wrestler rose to fame after he joined India's Olympic medal-winners club with a silver medal at the 2020 Tokyo Olympics. He is the second Indian wrestler to win an Olympic silver after Sushil Kumar. He was among the 8 Indian wrestlers who represented India at the 2020 Tokyo Olympics.Prior to the Olympics, he had won a bronze medal at the 2019 World Wrestling Championships in the 57 kg weight category. At the 2020 Tokyo Olympics, a lot of expectations was riding on Dahiya’s shoulders who came out of Delhi’s famed Chhatrasal Stadium, which has produced the likes of Olympic medalists Sushil Kumar, Yogeshwar Dutt, among others. Dahiya represented India along with Bajrang Punia (65kg), Deepak Punia (86kg), and Sumit Malik (125kg) in the men’s category, while Seema Bisla (50kg) Vinesh Phogat (53kg), Anshu Malik (57kg) and Sonam Malik (62kg) in women's category. Apart from Dahiya, Bajrang Punia won a bronze medal for India and Deepak Punia came close losing the bronze medal play-off at the Olympics. ",
    },
    {
      id: 3,
      name: "Mirabai Chanu",
      job: "Silver",
      img:
        "images/Mirabai Chanu.jpg",
      text:
        " Chanu Mirabai was born on 8th August 1994 near Imphal. Her family supported her dream of being a weightlifter since she was 12. The family identified her strength when she was able to lift the logs of wood her brother found difficult to pick and walk easily back home. She was known as the heavyweight lifter in the family. Chanu Mirabai's career began with the Glasgow Commonwealth games where she won the silver medal in the 48 kg category. She also qualified for the Rio Olympics but could not finish with any successful lifts.In 2017 she won the Gold Medal in the women's category weightlifting in World Weightlifting Championships at Anaheim, CA, USA. She created a record by lifting the 194 kg weight in total and 109 kg clean and jerk. She also won the first gold medal for India in the 2018 Commonwealth Games. In the 2019 World Weightlifting Championships, Mirabai lifted a total of 201kgs but finished 4th. In 2021, she won the bronze medal at the 2020 Asian Weightlifting Championships in Tashkent At 2020 Summer Olympics in Tokyo Chanu won a silver medal with a total lift of 202 kg in the 49 kg section. ",
    },
    
    {
      id: 4,
      name: "PV Sindhu",
      job: "Bronze",
      img:
        "images/PV Sindhu.jpg",
      text:
        " Pusarla Venkata Sindhu (born 5 July 1995) is an Indian professional badminton player. Olympics and on the BWF circuit including a gold at the 2019 World Championships. She is the first Indian to become the Badminton World Champion and only the second individual athlete from India to win two consecutive medals at the Olympic Games.Pusarla broke into the top 20 of the BWF World Ranking in September 2012, at the age of 17. She represented India at the 2016 Summer Olympics (Rio), becoming the first Indian badminton player to reach a final. She won the silver medal after losing out to Spain's Carolina Marin.She made her second consecutive Olympic appearance at the 2020 Summer Olympics (Tokyo) and won a bronze medal, becoming the first Indian woman ever to win two Olympic medals. .She is the recipient of the sports honour Major Dhyan Chand Khel Ratna, and India's fourth highest civilian award, the Padma Shri. She was also honoured with Padma Bhushan, the third highest civilian award in India, in January 2020..",
    },
  
    {
      id: 5,
      name: "Lovlina Borgohain",
      job: "Bronze",
      img:
        "images/Lovlina_final.jpg",
      text:
      " Lovlina Borgohain (born 2 October 1997) is an Indian amateur boxer .After receiving training from coach Podum Boro, Lovlina participated in the junior and senior nationals' boxing competitions and excelled well. As soon as Lovalina’s boxing career began to progress towards the international stage, she came under the guidance of the chief coach of women’s boxing Shiv Singh.Lovlina’s international breakthrough came in 2017 when she made her international debut for India and won a Bronze medal in the 75 kg category at the President’s Cup in Astana, Kazakhstan.In 2018, She won her maiden international Gold medal at the inaugural India Open International Boxing held in New Delhi. This achievement got her selected to represent India at the 2018 Commonwealth Games. In the same year, she won a Silver medal at the Ulaanbaatar Cup in Mongolia, followed by a Bronze medal at the Silesian Championships. Both in the 69 kg Welterweight category.In 2019, she won a Silver medal at the 2nd India Open International Boxing in Guwahati in Assam.  ",
      
    },
  
    {
      id: 6,
      name: "Indian hockey team'mens",
      job: "Bronze",
      img:
        "images/hockeyTeam.jpg",
      text:
        "The India men's national field hockey team represents India in international Field hockey competitions, and is governed by Hockey India.In 1928, the team won its first Olympic gold medal and until 1960, the Indian men's team remained unbeaten in the Olympics, winning six gold medals in a row. India also won the World Cup in 1975. India's hockey team is the most successful team ever in the Olympics, having won eight gold medals in 1928, 1932, 1936, 1948, 1952, 1956, 1964 and 1980. India also has the best overall performance in Olympic history with 83 victories out of the 134 matches played.  They are also the only team to ever win the Olympics without conceding a single goal in 1928 and 1956.They have won the Asian Games three times in the year 1966, 1998 and 2014. India came out on top in the Asia Cup in 2003, 2007 and in 2017. India has won 43 out of the 56 matches, the most by any team in the Asia Cup. They are also the most successful team in the Asian Champions Trophy by winning the competition three times in 2011, 2016 and in 2018. In total, India has won 27 official international titles.",
    },
  
    {
      id: 7,
      name: "Bajrang Punia",
      job: "Bronze",
      img:
        "images/Bajrang Punia.jpeg",
      text:
        "Bajrang Punia was born on 26 February 1994 in Khudan, Jhajjar, Haryana, India. He completed his schooling education in his hometown. He is a famous Indian wrestler. He contests in the 65 kg weight category.  He won 3 medals in the World Wrestling Championships only Indian wrestler. He belongs to a Jat family. At the age of 7 years, he began wrestling.Recently, He serves on the post of Gazetted officer OSD Sports in Indian Railways. He qualified for The Olympics in freestyle wrestling in India, in 2020. In 2013, He won his 1st international Olympics in the Asian Wrestling Championship. He won many medals in several wrestling championships involving Asian Games, Commonwealth Games, and many national and international tournaments.He won many other awards like Dave Schultz Memorial Tournament – Bronze (2013), Dave Schultz Memorial Tournament – Bronze (2015).  He won many awards with achievements in his life. If you wanna more details about Bajrang Punia Biography, Wiki then continues reading this article.",
    },
  ];
  