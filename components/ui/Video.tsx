export interface Props {
  iframeDoVideo: string;
}

export default function Video({ iframeDoVideo }: Props) {
  return (
    <div class="w-[1020px] max-w-full mx-auto  section-video my-8 sm:my-10 px-4 lg:px-0">
      {iframeDoVideo && (
        <div
          class="text-base text-center mt-4"
          dangerouslySetInnerHTML={{ __html: iframeDoVideo }}
        />
      )}
    </div>
  );
}
