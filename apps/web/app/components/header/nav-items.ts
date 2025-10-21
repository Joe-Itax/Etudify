import {
  Home,
  Book,
  Calendar,
  Briefcase,
  Newspaper,
  Info,
  Contact,
} from "lucide-react";

const navItems = [
  { label: "Accueil", path: "/", icon: Home },
  { label: "Ressources ", path: "/resources", icon: Book },
  { label: "Événements ", path: "/events", icon: Calendar },
  { label: "Opportunités ", path: "/opportunities", icon: Briefcase },
  { label: "Blog ", path: "/blog", icon: Newspaper },
  { label: "À propos ", path: "/about", icon: Info },
  { label: "Contact  ", path: "/contact", icon: Contact },
];

export default navItems;
