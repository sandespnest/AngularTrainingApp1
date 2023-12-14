import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  districts=[
    {
      id:1,
      title:"Nelliyampathi",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Nelliampathi_Sitharkundu_viewpoint.jpg/405px-Nelliampathi_Sitharkundu_viewpoint.jpg",
      desc:"Malampuzha, about 10 km from Palakkad, is a famous picnic spot, the biggest dam-garden of Kerala. This is a large irrigation dam built on the river Bharathapuzha at the base of the hills of the Western Ghats. Started in 1949, the dam was commissioned in 1955. The capacity of the dam is 115.06 m (375.15 ft). Around the dam there are beautifully landscaped gardens, with lush green lawns, well laid-out with flower beds, cool pools, fountains and pathways, a rock garden and rose garden with over a hundred varieties of roses. Udan khatola, an aerial passenger ropeway across the garden, the first of its kind in South India, offers an air journey of 20 minutes at 60 ft. height across the gardens (on one of the 64 two-seater chairs with transparent hoods), giving a delightful panoramic view."

    },
    {
      id:2,
      title:"Athirappally",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/The_View_of_the_Athirapally_Falls_during_the_onset_of_Monsoon.jpg/1280px-The_View_of_the_Athirapally_Falls_during_the_onset_of_Monsoon.jpg",
      desc:"The 145 kilometres (90 mi) long Chalakudy River, originates in the Anaimalai mountains of the Western Ghats and flows through the Vazhachal Forest toward the Arabian Sea. The river starts off smooth but becomes more turbulent as it nears Athirapilly. At Athirappilly Falls, the water surges around big rocks and cascades down in three separate plumes. Below the falls, the river remains turbulent for about 1 kilometre (0.62 mi) until it reaches Kannamkuzhi, from where it calms and flows smoothly until reaching the dam at Thumpoormuzhi"
    },
    {
      id:3,
      title:"Silent Valley",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/SAN_BIRDS_48.jpg/1280px-SAN_BIRDS_48.jpg",
      desc:"The first Western investigation of the watersheds of the Silent Valley area was in 1857 by the botanist Robert Wight.[2] The British named the area Silent Valley because of a perceived absence of noisy cicadas. Another story attributes the name to the anglicisation of Sairandhri. A third story refers to the presence of many lion-tailed macaques Macaca silenus.[4] In 1914, the forest of the Silent Valley area was declared a reserve forest. Between 1927 and 1976, portions of the Silent Valley forest area were subjected to forestry operations. In 1928, the location on the Kunthipuzha River at Sairandhri was identified as an ideal site for electricity generation, and in 1958 a study and survey of the area was conducted and a hydroelectric project of 120 MV costing Rs. 17 crore was proposed by the Kerala State Electricity Board"
    }

   

  ]

}
