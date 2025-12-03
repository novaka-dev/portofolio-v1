export interface Video {
  id: string;
  title: string;
  videoUrl: string;
}

export interface VideoPostPreview {
  slug: string;
  frontmatter: Video;
}
