import { useState } from 'react';
import { assetManifest } from '../../content/assetManifest';
import { Image as ImageIcon } from 'lucide-react';

interface MediaFrameProps {
  mediaKey: string;
  className?: string;
}

export function MediaFrame({ mediaKey, className = '' }: MediaFrameProps) {
  const asset = assetManifest[mediaKey];
  const [hasError, setHasError] = useState(false);

  // If missing from manifest or has an error, show fallback
  if (!asset || asset.status === 'missing' || hasError) {
    return (
      <div
        className={`media-frame ${className}`}
        data-media-category={asset ? asset.category : 'unknown'}
      >
        <div className="media-frame__fallback">
          <div className="media-frame__fallback-icon">
            <ImageIcon size={48} strokeWidth={1} />
          </div>
        </div>
      </div>
    );
  }

  // Real asset available (video takes precedence over poster)
  return (
    <div
      className={`media-frame ${className}`}
      data-media-category={asset.category}
    >
      {asset.video ? (
        <video
          src={asset.video}
          poster={asset.poster || undefined}
          autoPlay
          muted
          loop
          playsInline
          className="media-frame__media"
          onError={() => setHasError(true)}
        />
      ) : (
        <img
          src={asset.poster!}
          alt={asset.fallbackLabel}
          className="media-frame__media"
          loading="lazy"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
