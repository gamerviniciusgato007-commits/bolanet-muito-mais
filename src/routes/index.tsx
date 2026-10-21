import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bolanet | Muito mais que internet" },
      { name: "description", content: "Internet sem limites, saúde, entretenimento, conhecimento, descontos e monitoramento para sua família." },
      { property: "og:title", content: "Bolanet | Muito mais que internet" },
      { property: "og:description", content: "Conheça os planos Infinity e tudo o que a Bolanet entrega para sua família." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});
