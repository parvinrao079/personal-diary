const mockEntries = [
  {
    id: 1,
    title: 'Sunset Serenade',
    date: '2024-08-2',
    mood: 'peaceful',
    image:
      'https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    preview:
      'As the sun dipped below the horizon, painting the sky in hues of orange and pink, I found myself lost in the tranquil beauty of the moment. The gentle lapping of waves against the shore provided a soothing rhythm, while the salty sea breeze caressed my skin. In this peaceful interlude between day and night, all my worries seemed to melt away, replaced by a profound sense of connection with the natural world around me.',
    location: 'Malibu Beach',
    tags: ['nature', 'reflection'],
    music: 'Clair de Lune - Debussy',
    likes: 23,
    comments: 5,
  },
  {
    id: 2,
    title: 'Culinary Adventure',
    date: '2024-08-22',
    mood: 'excited',
    image:
      'https://images.pexels.com/photos/6181092/pexels-photo-6181092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    preview:
      'Today I embarked on a gastronomic journey through the vibrant streets of Bangkok, my senses overwhelmed by the kaleidoscope of flavors, aromas, and textures. From sizzling street-side grills to hidden family-run eateries, each bite told a story of culinary tradition and innovation. The fiery heat of tom yum soup danced on my tongue, while the delicate balance of sweet, sour, and savory in a perfectly crafted pad thai left me craving more. This culinary adventure not only satisfied my appetite but also offered a deeper understanding of Thai culture and hospitality.',
    location: 'Bangkok, Thailand',
    tags: ['food', 'travel'],
    music: 'Thai Street Market Ambience',
    likes: 45,
    comments: 12,
  },
  {
    id: 3,
    title: 'Coding Breakthrough',
    date: '2024-08-21',
    mood: 'accomplished',
    image:
      'https://images.pexels.com/photos/2079228/pexels-photo-2079228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    preview: `After weeks of struggle, I finally cracked the algorithm! The feeling of triumph washed over me as the code executed flawlessly, solving a problem that had been plaguing our team for months. This breakthrough not only optimized our application's performance but also opened up new possibilities for future features. As I sat back in my chair, basking in the glow of my computer screen, I realized that moments like these are what make the long hours and countless cups of coffee worthwhile. It's not just about the code; it's about pushing the boundaries of what's possible and creating solutions that can make a real difference.`,
    location: 'Home Office',
    tags: ['coding', 'success'],
    music: 'The Social Network Soundtrack',
    likes: 67,
    comments: 8,
  },
  {
    id: 4,
    title: 'Mountain Meditation',
    date: '2024-08-20',
    mood: 'serene',
    image:
      'https://images.pexels.com/photos/127905/pexels-photo-127905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    preview:
      'Perched atop the misty peak, I found a moment of pure tranquility. The world below seemed distant and insignificant as I sat cross-legged on the cool, damp earth. With each breath, I felt more connected to the ancient mountains surrounding me. The thin air at this altitude made each inhale deliberate and precious. As I closed my eyes and turned my focus inward, the chattering of my mind slowly gave way to a profound silence. In this sacred space, high above the cares of everyday life, I discovered a wellspring of inner peace that I knew would sustain me long after I descended back to the world below.',
    location: 'Himalayan Retreat',
    tags: ['meditation', 'nature'],
    music: 'Tibetan Singing Bowls',
    likes: 89,
    comments: 15,
  },
  {
    id: 5,
    title: 'Vintage Vinyl Vibes',
    date: '2024-08-19',
    mood: 'nostalgic',
    image:
      'https://images.pexels.com/photos/5857863/pexels-photo-5857863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    preview:
      "Dusting off my grandfather's record collection, I was transported to another era. The familiar crackle of the needle hitting the groove filled the room, and suddenly I was a child again, sitting at my grandfather's feet as he regaled me with stories of his youth. Each album was a time capsule, preserving not just the music but the memories and emotions of generations past. As Fleetwood Mac's 'Dreams' floated through the air, I found myself reflecting on the passage of time and the enduring power of music to connect us across the years. In that moment, I felt a deep appreciation for the legacy my grandfather had left behind, encoded in these fragile discs of vinyl.",
    location: 'Childhood Home',
    tags: ['music', 'memories'],
    music: 'Fleetwood Mac - Dreams',
    likes: 34,
    comments: 7,
  },
  {
    id: 6,
    title: 'Stargazing Epiphany',
    date: '2024-08-18',
    mood: 'awestruck',
    image:
      'https://images.pexels.com/photos/4171211/pexels-photo-4171211.jpeg?auto=compress&cs=tinysrgb&w=800',
    preview:
      'Under a canopy of stars, I contemplated our place in the vast universe. The Milky Way stretched across the sky like a celestial river, each pinprick of light a sun unto itself, possibly nurturing worlds and life forms we can scarcely imagine. As I peered through the powerful telescope at the Desert Sky Observatory, the rings of Saturn came into sharp focus, and I felt a profound sense of both insignificance and connection. Here we are, on our tiny blue marble, part of an incomprehensibly large cosmic dance. The realization was both humbling and exhilarating, reminding me of the endless possibilities that exist both in the heavens and within ourselves.',
    location: 'Desert Sky Observatory',
    tags: ['astronomy', 'philosophy'],
    music: 'Holst: The Planets',
    likes: 56,
    comments: 9,
  },
  {
    id: 7,
    title: 'Urban Jungle Exploration',
    date: '2024-08-17',
    mood: 'adventurous',
    image:
      'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    preview:
      "Today, I ventured into the heart of the concrete jungle, determined to uncover the hidden gems of our bustling metropolis. Armed with nothing but a curious spirit and comfortable walking shoes, I wandered through narrow alleyways adorned with vibrant street art, each mural telling a story of urban life and cultural resilience. I stumbled upon a quaint bookstore tucked away between towering skyscrapers, its shelves lined with forgotten tales and undiscovered literary treasures. As I navigated the city's intricate web of streets and neighborhoods, I realized that even in the most familiar places, there's always something new to discover if you're willing to look beyond the surface.",
    location: 'New York City',
    tags: ['urban', 'exploration'],
    music: 'New York State of Mind - Billy Joel',
    likes: 78,
    comments: 14,
  },
  {
    id: 8,
    title: 'Digital Detox Revelation',
    date: '2024-08-16',
    mood: 'refreshed',
    image:
      'https://images.pexels.com/photos/1122868/pexels-photo-1122868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    preview:
      "As I powered down my devices for a week-long digital detox, I braced myself for the withdrawal symptoms I was sure would follow. Instead, I found myself rediscovering the simple joys of analog life. Without the constant ping of notifications, time seemed to slow down, allowing me to fully immerse myself in the present moment. I rediscovered the pleasure of losing myself in a physical book, the satisfaction of writing with pen and paper, and the joy of face-to-face conversations uninterrupted by glowing screens. This detox wasn't just a break from technology; it was a journey back to myself, reminding me of the richness of life that exists beyond the digital realm.",
    location: 'Countryside Cabin',
    tags: ['wellness', 'mindfulness'],
    music: 'Sounds of Nature',
    likes: 92,
    comments: 21,
  },
  {
    id: 9,
    title: 'Artistic Awakening',
    date: '2024-08-15',
    mood: 'inspired',
    image:
      'https://images.pexels.com/photos/7128339/pexels-photo-7128339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    preview:
      "Standing before a blank canvas, paintbrush in hand, I felt a surge of creative energy unlike anything I'd experienced before. Colors danced in my mind, begging to be brought to life on the pristine white surface before me. As I began to paint, time seemed to disappear, and I found myself in a state of flow, where every brushstroke felt guided by some unseen force. The resulting artwork was a reflection not just of what I saw, but of what I felt - a visual representation of the complex emotions and ideas swirling within me. This artistic awakening reminded me of the power of self-expression and the healing nature of creativity.",
    location: 'Local Art Studio',
    tags: ['art', 'creativity'],
    music: 'Claude Debussy - Rêverie',
    likes: 63,
    comments: 11,
  },
  {
    id: 10,
    title: 'Volunteer Victory',
    date: '2024-08-14',
    mood: 'grateful',
    image:
      'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    preview:
      "Today marked the culmination of months of hard work as our community volunteer project finally came to fruition. What started as a small idea to clean up the local park blossomed into a full-scale community rejuvenation effort. As I looked around at the newly planted trees, the freshly painted playground equipment, and the smiling faces of my neighbors, I felt a profound sense of pride and connection. This project taught me the power of collective action and the incredible impact that can be made when people come together for a common cause. It's a powerful reminder that change starts at the local level, and that each of us has the ability to make a difference in our community.",
    location: 'Community Park',
    tags: ['volunteering', 'community'],
    music: 'Wonderful World - Louis Armstrong',
    likes: 105,
    comments: 28,
  },
  {
    id: 11,
    title: 'Culinary Time Machine',
    date: '2024-08-13',
    mood: 'nostalgic',
    image:
      'https://images.pexels.com/photos/5865051/pexels-photo-5865051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    preview:
      "As I stirred the bubbling pot of my grandmother's secret recipe soup, the kitchen filled with aromas that transported me back to my childhood. Each ingredient seemed to unlock a flood of memories - the warmth of her kitchen on a cold winter's day, the sound of her laughter as she shared family stories, the feeling of being loved and cared for. As I tasted the soup, tears welled up in my eyes. It wasn't just the flavors that were perfect; it was the connection to my past, the preservation of family traditions, and the realization that through this simple act of cooking, my grandmother's legacy lives on. Food, I realized, is more than sustenance; it's a bridge across generations, a keeper of memories, and a source of comfort in an ever-changing world.",
    location: 'Family Kitchen',
    tags: ['cooking', 'family'],
    music: 'La Vie en Rose - Édith Piaf',
    likes: 87,
    comments: 19,
  },
  {
    id: 12,
    title: 'Marathon Milestone',
    date: '2024-08-12',
    mood: 'triumphant',
    image:
      'https://images.pexels.com/photos/2659475/pexels-photo-2659475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    preview:
      "Crossing the finish line of my first marathon was a moment of pure elation and exhaustion. The journey to this point had been long and arduous, filled with early morning runs, aching muscles, and moments of self-doubt. But as I pushed through the last mile, the cheers of the crowd propelling me forward, I felt an overwhelming sense of accomplishment. This race was more than just a physical challenge; it was a test of mental fortitude and a journey of self-discovery. With each step, I had proven to myself that I was capable of achieving what once seemed impossible. As I collected my medal, I realized that the real victory wasn't in the finish time, but in the person I had become through the process of training and persevering.",
    location: 'City Marathon',
    tags: ['running', 'achievement'],
    music: 'Eye of the Tiger - Survivor',
    likes: 134,
    comments: 42,
  },
  {
    id: 13,
    title: 'Mindful Forest Bathing',
    date: '2024-08-11',
    mood: 'zen',
    image:
      'https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    preview:
      'Today, I immersed myself in the ancient Japanese practice of Shinrin-yoku, or forest bathing. As I stepped into the dense woodland, the cacophony of modern life faded away, replaced by the gentle rustle of leaves and the melodious songs of hidden birds. I focused on engaging all my senses - the rough texture of tree bark beneath my fingertips, the earthy scent of damp soil, the dappled sunlight dancing on the forest floor. With each mindful breath, I felt a deep connection to the natural world and a profound sense of peace settling over me. This experience was a powerful reminder of the healing power of nature and the importance of taking time to disconnect from our fast-paced lives to reconnect with the world around us.',
    location: 'Redwood National Park',
    tags: ['nature', 'mindfulness'],
    music: 'Forest Sounds',
    likes: 76,
    comments: 13,
  },
];

export default mockEntries;
