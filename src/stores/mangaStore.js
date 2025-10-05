import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';

const allManga = ref([
  { id: 1, title: 'Attack on Titan', author: 'Hajime Isayama', status: 'Finished', imageUrl: 'https://placehold.co/400x600/E8112D/white?text=Attack+on+Titan', genres: ['Action', 'Fantasy', 'Seinen'], synopsis: 'In a world where humanity resides within enormous walls to protect themselves from giant man-eating humanoids known as Titans, a young boy vows to exterminate the Titans after they cause the destruction of his hometown.' },
  { id: 2, title: 'One-Punch Man', author: 'ONE', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/FFC800/white?text=One-Punch+Man', genres: ['Action', 'Comedy', 'Seinen'], synopsis: 'Follows the life of a hero who can defeat any enemy with a single punch, but seeks to find a worthy opponent after growing bored by a lack of challenge.' },
  { id: 3, title: 'Berserk', author: 'Kentaro Miura', status: 'Hiatus', imageUrl: 'https://placehold.co/400x600/1C1C1C/white?text=Berserk', genres: ['Action', 'Fantasy', 'Seinen'], synopsis: 'Guts, a former mercenary now known as the "Black Swordsman," is out for revenge. A dark fantasy epic of struggle and destiny.' },
  { id: 4, title: 'Jujutsu Kaisen', author: 'Gege Akutami', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/7B1FA2/white?text=Jujutsu+Kaisen', genres: ['Action', 'Fantasy'], synopsis: 'A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman\'s school to be able to locate the demon\'s other body parts and thus exorcise himself.' },
  { id: 5, title: 'Chainsaw Man', author: 'Tatsuki Fujimoto', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/FF4500/white?text=Chainsaw+Man', genres: ['Action', 'Seinen'], synopsis: 'Following a betrayal, a young man left for dead is reborn as a powerful devil-human hybrid and is soon enlisted into an organization dedicated to hunting devils.' },
  { id: 6, title: 'Vinland Saga', author: 'Makoto Yukimura', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/8B4513/white?text=Vinland+Saga', genres: ['Action', 'Seinen'], synopsis: 'A young man named Thorfinn finds himself in a quest for revenge against the man who murdered his father. A story of vikings and vengeance.' },
  { id: 7, title: 'Spy x Family', author: 'Tatsuya Endo', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/32CD32/white?text=Spy+x+Family', genres: ['Action', 'Comedy'], synopsis: 'A spy on an undercover mission gets married and adopts a child, not realizing that his fake wife and daughter are an assassin and a telepath, respectively.' },
  { id: 8, title: 'Kaiju No. 8', author: 'Naoya Matsumoto', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/4682B4/white?text=Kaiju+No.+8', genres: ['Action', 'Fantasy'], synopsis: 'A man who is part of a crew that cleans up after giant monster attacks ingests a monster, gaining the ability to turn into one himself.' },
  { id: 9, title: 'Vagabond', author: 'Takehiko Inoue', status: 'Hiatus', imageUrl: 'https://placehold.co/400x600/A52A2A/white?text=Vagabond', genres: ['Action', 'Seinen'], synopsis: 'The fictionalized life of the legendary Japanese swordsman Miyamoto Musashi, chronicling his journey from a brash youth to an enlightened warrior.' },
  { id: 10, title: 'Grand Blue', author: 'Kenji Inoue', status: 'Ongoing', imageUrl: 'https://placehold.co/400x600/1E90FF/white?text=Grand+Blue', genres: ['Comedy', 'Seinen'], synopsis: 'A college student looking forward to his ideal life in a seaside town gets roped into the antics of his university\'s eccentric diving club.' },
]);

const likedMangaIds = ref(new Set());

const notifications = ref([
  { id: 1, text: 'Chapter 158 of "Jujutsu Kaisen" was just released!', time: '5 minutes ago', unread: true },
  { id: 2, text: '"Attack on Titan" has a new recommendation for you.', time: '1 hour ago', unread: true },
  { id: 3, text: 'Your request for "One Piece" has been approved.', time: 'Yesterday', unread: false },
  { id: 4, text: 'Welcome to MangaHub, olmosjt!', time: '2 days ago', unread: false },
  { id: 5, text: 'A new comment was posted on the "Hear Me Out!" board.', time: '2 days ago', unread: false },
]);

const hasUnreadNotifications = computed(() => notifications.value.some(n => n.unread));

const markNotificationsAsRead = () => {
  notifications.value.forEach(n => n.unread = false);
};

const toggleLike = (mangaId) => {
  if (likedMangaIds.value.has(mangaId)) {
    likedMangaIds.value.delete(mangaId);
  } else {
    likedMangaIds.value.add(mangaId);
  }
};

const likedManga = computed(() => {
  return allManga.value.filter(manga => likedMangaIds.value.has(manga.id));
});

const filters = reactive({
  searchQuery: '',
  genres: [],
  status: '',
  sortBy: 'title-asc'
});

const resetFilters = () => {
  filters.searchQuery = '';
  filters.genres = [];
  filters.status = '';
  filters.sortBy = 'title-asc';
}

const getMangaById = (id) => {
  return allManga.value.find(manga => manga.id === parseInt(id));
};

const getChaptersForManga = (mangaId) => {
  return Array.from({ length: 158 }, (_, i) => {
    const chapterNum = 158 - i;
    return {
      id: chapterNum,
      title: `Chapter ${chapterNum}: The Unfolding Mystery`,
      date: `October ${Math.floor(Math.random() * 30) + 1}, 2025`,
    };
  });
};

const categories = {
  trending: {
    title: 'Trending Now',
    items: computed(() => allManga.value.filter(m => [2, 4, 5, 6].includes(m.id)))
  },
  'new-releases': {
    title: 'New Releases',
    items: computed(() => allManga.value.filter(m => [7, 8].includes(m.id)))
  },
  popular: {
    title: 'Popular Titles',
    items: computed(() => allManga.value.filter(m => [1, 3, 9, 10].includes(m.id)))
  }
};

const getCategoryByName = (name) => {
  return categories[name] || { title: 'Unknown Category', items: [] };
};

const isAuthenticated = ref(false);
const user = ref(null);

const login = (userData) => {
  isAuthenticated.value = true;
  user.value = userData;
};

const logout = () => {
  isAuthenticated.value = false;
  user.value = null;
};


export function useMangaStore() {
  return {
    allManga,
    likedManga,
    likedMangaIds,
    toggleLike,
    filters,
    getCategoryByName,
    resetFilters,
    getMangaById,
    getChaptersForManga,
    notifications,
    hasUnreadNotifications,
    markNotificationsAsRead,
    isAuthenticated,
    user,
    login,
    logout,
  };
}
