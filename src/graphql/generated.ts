export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  GatsbyImageData: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
  contentFilePath?: Maybe<Scalars['String']>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  graphqlTypegen?: Maybe<SiteGraphqlTypegen>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  trailingSlash?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteGraphqlTypegen = {
  typesOutputPath?: Maybe<Scalars['String']>;
  documentSearchPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  generateOnBuild?: Maybe<Scalars['Boolean']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulEntry = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulAsset = ContentfulReference & Node & RemoteFile & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  gatsbyImageData?: Maybe<Scalars['GatsbyImageData']>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  url?: Maybe<Scalars['String']>;
  placeholderUrl?: Maybe<Scalars['String']>;
  mimeType: Scalars['String'];
  filename: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  filesize?: Maybe<Scalars['Int']>;
  publicUrl: Scalars['String'];
  resize?: Maybe<RemoteFileResize>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['GatsbyImageData']>;
};


export type ContentfulAssetGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<GatsbyImagePlaceholder>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  resizingBehavior?: InputMaybe<ImageResizingBehavior>;
  cropFocus?: InputMaybe<ContentfulImageCropFocus>;
  cornerRadius?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetGatsbyImageArgs = {
  layout?: InputMaybe<RemoteFileLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<RemoteFileFit>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};

/** Remote Interface */
export type RemoteFile = {
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  filename: Scalars['String'];
  filesize?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  publicUrl: Scalars['String'];
  resize?: Maybe<RemoteFileResize>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['GatsbyImageData']>;
};


/** Remote Interface */
export type RemoteFileResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};


/** Remote Interface */
export type RemoteFileGatsbyImageArgs = {
  layout?: InputMaybe<RemoteFileLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<RemoteFileFit>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type RemoteFileResize = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type RemoteFileFit =
  | 'COVER'
  | 'FILL'
  | 'OUTSIDE'
  | 'CONTAIN';

export type RemoteFileFormat =
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type RemoteFileCropFocus =
  | 'CENTER'
  | 'TOP'
  | 'RIGHT'
  | 'BOTTOM'
  | 'LEFT'
  | 'ENTROPY'
  | 'EDGES'
  | 'FACES';

export type RemoteFileLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type RemoteFilePlaceholder =
  | 'DOMINANT_COLOR'
  | 'BLURRED'
  | 'TRACED_SVG'
  | 'NONE';

export type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type ContentfulImageCropFocus =
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulSeoMetadata = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  no_index?: Maybe<Scalars['Boolean']>;
  no_follow?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSeoMetadataSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulSeoMetadataCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulSeoMetadataUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulSeoMetadataSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSeoMetadataSysContentType>;
};

export type ContentfulSeoMetadataSysContentType = {
  sys?: Maybe<ContentfulSeoMetadataSysContentTypeSys>;
};

export type ContentfulSeoMetadataSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulPage = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  internalName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  body?: Maybe<Array<Maybe<ContentfulComponentCtaContentfulComponentDuplexContentfulComponentHeroContentfulCustomComponentUnion>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPageSys>;
  header?: Maybe<ContentfulHeader>;
  footer?: Maybe<ContentfulFooter>;
  seo?: Maybe<ContentfulSeoMetadata>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulPageCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulPageUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulComponentCtaContentfulComponentDuplexContentfulComponentHeroContentfulCustomComponentUnion = ContentfulComponentCta | ContentfulComponentDuplex | ContentfulComponentHero | ContentfulCustomComponent;

export type ContentfulPageSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPageSysContentType>;
};

export type ContentfulPageSysContentType = {
  sys?: Maybe<ContentfulPageSysContentTypeSys>;
};

export type ContentfulPageSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulComponentFeatureBlock = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  action?: Maybe<ContentfulComponentActionItem>;
  iconAttributes?: Maybe<ContentfulComponentFeatureBlockIconAttributesJsonNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulComponentFeatureBlockSys>;
  component__cta?: Maybe<Array<Maybe<ContentfulComponentCta>>>;
  description?: Maybe<ContentfulComponentFeatureBlockDescriptionTextNode>;
  /** Returns all children nodes filtered by type contentfulComponentFeatureBlockIconAttributesJsonNode */
  childrenContentfulComponentFeatureBlockIconAttributesJsonNode?: Maybe<Array<Maybe<ContentfulComponentFeatureBlockIconAttributesJsonNode>>>;
  /** Returns the first child node of type contentfulComponentFeatureBlockIconAttributesJsonNode or null if there are no children of given type on this node */
  childContentfulComponentFeatureBlockIconAttributesJsonNode?: Maybe<ContentfulComponentFeatureBlockIconAttributesJsonNode>;
  /** Returns all children nodes filtered by type contentfulComponentFeatureBlockDescriptionTextNode */
  childrenContentfulComponentFeatureBlockDescriptionTextNode?: Maybe<Array<Maybe<ContentfulComponentFeatureBlockDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulComponentFeatureBlockDescriptionTextNode or null if there are no children of given type on this node */
  childContentfulComponentFeatureBlockDescriptionTextNode?: Maybe<ContentfulComponentFeatureBlockDescriptionTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulComponentFeatureBlockCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulComponentFeatureBlockUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulComponentFeatureBlockSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulComponentFeatureBlockSysContentType>;
};

export type ContentfulComponentFeatureBlockSysContentType = {
  sys?: Maybe<ContentfulComponentFeatureBlockSysContentTypeSys>;
};

export type ContentfulComponentFeatureBlockSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulComponentDuplex = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<ContentfulComponentDuplexDescription>;
  align?: Maybe<Scalars['String']>;
  image?: Maybe<ContentfulAsset>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulComponentDuplexSys>;
  anchor?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulComponentDuplexCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulComponentDuplexUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulComponentDuplexDescription = {
  raw?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<ContentfulComponentFeatureBlock>>>;
};

export type ContentfulComponentDuplexSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulComponentDuplexSysContentType>;
};

export type ContentfulComponentDuplexSysContentType = {
  sys?: Maybe<ContentfulComponentDuplexSysContentTypeSys>;
};

export type ContentfulComponentDuplexSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulComponentHero = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<ContentfulComponentHeroContent>;
  imageLocation?: Maybe<Scalars['String']>;
  image?: Maybe<ContentfulAsset>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulComponentHeroSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulComponentHeroCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulComponentHeroUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulComponentHeroContent = {
  raw?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<ContentfulComponentActionItem>>>;
};

export type ContentfulComponentHeroSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulComponentHeroSysContentType>;
};

export type ContentfulComponentHeroSysContentType = {
  sys?: Maybe<ContentfulComponentHeroSysContentTypeSys>;
};

export type ContentfulComponentHeroSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulComponentCta = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<ContentfulComponentCtaContent>;
  boxed?: Maybe<Scalars['Boolean']>;
  align?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  featuresOrientation?: Maybe<Scalars['String']>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulComponentCtaSys>;
  anchor?: Maybe<Scalars['String']>;
  description?: Maybe<ContentfulComponentCtaDescriptionTextNode>;
  features?: Maybe<Array<Maybe<ContentfulComponentFeatureBlock>>>;
  /** Returns all children nodes filtered by type contentfulComponentCtaDescriptionTextNode */
  childrenContentfulComponentCtaDescriptionTextNode?: Maybe<Array<Maybe<ContentfulComponentCtaDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulComponentCtaDescriptionTextNode or null if there are no children of given type on this node */
  childContentfulComponentCtaDescriptionTextNode?: Maybe<ContentfulComponentCtaDescriptionTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulComponentCtaCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulComponentCtaUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulComponentCtaContent = {
  raw?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<ContentfulComponentActionItemContentfulCustomComponentUnion>>>;
};

export type ContentfulComponentActionItemContentfulCustomComponentUnion = ContentfulComponentActionItem | ContentfulCustomComponent;

export type ContentfulComponentCtaSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulComponentCtaSysContentType>;
};

export type ContentfulComponentCtaSysContentType = {
  sys?: Maybe<ContentfulComponentCtaSysContentTypeSys>;
};

export type ContentfulComponentCtaSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulComponentActionItem = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  itemType?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  iconPosition?: Maybe<Scalars['String']>;
  component__feature_block?: Maybe<Array<Maybe<ContentfulComponentFeatureBlock>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulComponentActionItemSys>;
  align?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
  header?: Maybe<Array<Maybe<ContentfulHeader>>>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulComponentActionItemCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulComponentActionItemUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulComponentActionItemSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulComponentActionItemSysContentType>;
};

export type ContentfulComponentActionItemSysContentType = {
  sys?: Maybe<ContentfulComponentActionItemSysContentTypeSys>;
};

export type ContentfulComponentActionItemSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulHeader = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  logo?: Maybe<ContentfulAsset>;
  cta?: Maybe<ContentfulComponentActionItem>;
  links?: Maybe<Array<Maybe<ContentfulComponentNavigationLink>>>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulHeaderSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulHeaderCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulHeaderUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulHeaderSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulHeaderSysContentType>;
};

export type ContentfulHeaderSysContentType = {
  sys?: Maybe<ContentfulHeaderSysContentTypeSys>;
};

export type ContentfulHeaderSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulComponentNavigationLink = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  opensInNewTab?: Maybe<Scalars['Boolean']>;
  iconPosition?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  footer?: Maybe<Array<Maybe<ContentfulFooter>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulComponentNavigationLinkSys>;
  header?: Maybe<Array<Maybe<ContentfulHeader>>>;
  icon?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulComponentNavigationLinkCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulComponentNavigationLinkUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulComponentNavigationLinkSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulComponentNavigationLinkSysContentType>;
};

export type ContentfulComponentNavigationLinkSysContentType = {
  sys?: Maybe<ContentfulComponentNavigationLinkSysContentTypeSys>;
};

export type ContentfulComponentNavigationLinkSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulFooter = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  disclaimer?: Maybe<Scalars['String']>;
  sectionOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
  logo?: Maybe<ContentfulAsset>;
  links?: Maybe<Array<Maybe<ContentfulComponentNavigationLink>>>;
  socialMediaLinks?: Maybe<Array<Maybe<ContentfulComponentNavigationLink>>>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulFooterSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulFooterCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulFooterUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulFooterSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulFooterSysContentType>;
};

export type ContentfulFooterSysContentType = {
  sys?: Maybe<ContentfulFooterSysContentTypeSys>;
};

export type ContentfulFooterSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulCustomComponent = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulCustomComponentSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulCustomComponentCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulCustomComponentUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulCustomComponentSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulCustomComponentSysContentType>;
};

export type ContentfulCustomComponentSysContentType = {
  sys?: Maybe<ContentfulCustomComponentSysContentTypeSys>;
};

export type ContentfulCustomComponentSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ContentfulComponentFeatureBlockIconAttributesJsonNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  size?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  stroke?: Maybe<Scalars['Int']>;
  sys?: Maybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeSys>;
};

export type ContentfulComponentFeatureBlockIconAttributesJsonNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulComponentFeatureBlockDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulComponentFeatureBlockDescriptionTextNodeSys>;
};

export type ContentfulComponentFeatureBlockDescriptionTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulComponentCtaDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulComponentCtaDescriptionTextNodeSys>;
};

export type ContentfulComponentCtaDescriptionTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeSys = {
  type?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  contentfulEntry?: Maybe<ContentfulEntry>;
  allContentfulEntry: ContentfulEntryConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulSeoMetadata?: Maybe<ContentfulSeoMetadata>;
  allContentfulSeoMetadata: ContentfulSeoMetadataConnection;
  contentfulPage?: Maybe<ContentfulPage>;
  allContentfulPage: ContentfulPageConnection;
  contentfulComponentFeatureBlock?: Maybe<ContentfulComponentFeatureBlock>;
  allContentfulComponentFeatureBlock: ContentfulComponentFeatureBlockConnection;
  contentfulComponentDuplex?: Maybe<ContentfulComponentDuplex>;
  allContentfulComponentDuplex: ContentfulComponentDuplexConnection;
  contentfulComponentHero?: Maybe<ContentfulComponentHero>;
  allContentfulComponentHero: ContentfulComponentHeroConnection;
  contentfulComponentCta?: Maybe<ContentfulComponentCta>;
  allContentfulComponentCta: ContentfulComponentCtaConnection;
  contentfulComponentActionItem?: Maybe<ContentfulComponentActionItem>;
  allContentfulComponentActionItem: ContentfulComponentActionItemConnection;
  contentfulHeader?: Maybe<ContentfulHeader>;
  allContentfulHeader: ContentfulHeaderConnection;
  contentfulComponentNavigationLink?: Maybe<ContentfulComponentNavigationLink>;
  allContentfulComponentNavigationLink: ContentfulComponentNavigationLinkConnection;
  contentfulFooter?: Maybe<ContentfulFooter>;
  allContentfulFooter: ContentfulFooterConnection;
  contentfulCustomComponent?: Maybe<ContentfulCustomComponent>;
  allContentfulCustomComponent: ContentfulCustomComponentConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  contentfulComponentFeatureBlockIconAttributesJsonNode?: Maybe<ContentfulComponentFeatureBlockIconAttributesJsonNode>;
  allContentfulComponentFeatureBlockIconAttributesJsonNode: ContentfulComponentFeatureBlockIconAttributesJsonNodeConnection;
  contentfulComponentFeatureBlockDescriptionTextNode?: Maybe<ContentfulComponentFeatureBlockDescriptionTextNode>;
  allContentfulComponentFeatureBlockDescriptionTextNode: ContentfulComponentFeatureBlockDescriptionTextNodeConnection;
  contentfulComponentCtaDescriptionTextNode?: Maybe<ContentfulComponentCtaDescriptionTextNode>;
  allContentfulComponentCtaDescriptionTextNode: ContentfulComponentCtaDescriptionTextNodeConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<FileSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<DirectorySortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenFilterInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SiteSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SiteFunctionSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SitePageSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SitePluginSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SiteBuildMetadataSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulEntryArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter?: InputMaybe<ContentfulEntryFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulEntrySortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  placeholderUrl?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  gatsbyImage?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: InputMaybe<ContentfulAssetFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulAssetSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulSeoMetadataArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  seoTitle?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  keywords?: InputMaybe<StringQueryOperatorInput>;
  no_index?: InputMaybe<BooleanQueryOperatorInput>;
  no_follow?: InputMaybe<BooleanQueryOperatorInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulSeoMetadataSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulSeoMetadataArgs = {
  filter?: InputMaybe<ContentfulSeoMetadataFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulSeoMetadataSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulPageArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulPageSysFilterInput>;
  header?: InputMaybe<ContentfulHeaderFilterInput>;
  footer?: InputMaybe<ContentfulFooterFilterInput>;
  seo?: InputMaybe<ContentfulSeoMetadataFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulPageArgs = {
  filter?: InputMaybe<ContentfulPageFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulPageSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulComponentFeatureBlockArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  layout?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  action?: InputMaybe<ContentfulComponentActionItemFilterInput>;
  iconAttributes?: InputMaybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentFeatureBlockSysFilterInput>;
  component__cta?: InputMaybe<ContentfulComponentCtaFilterListInput>;
  description?: InputMaybe<ContentfulComponentFeatureBlockDescriptionTextNodeFilterInput>;
  childrenContentfulComponentFeatureBlockIconAttributesJsonNode?: InputMaybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeFilterListInput>;
  childContentfulComponentFeatureBlockIconAttributesJsonNode?: InputMaybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeFilterInput>;
  childrenContentfulComponentFeatureBlockDescriptionTextNode?: InputMaybe<ContentfulComponentFeatureBlockDescriptionTextNodeFilterListInput>;
  childContentfulComponentFeatureBlockDescriptionTextNode?: InputMaybe<ContentfulComponentFeatureBlockDescriptionTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulComponentFeatureBlockArgs = {
  filter?: InputMaybe<ContentfulComponentFeatureBlockFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulComponentFeatureBlockSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulComponentDuplexArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<ContentfulComponentDuplexDescriptionFilterInput>;
  align?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentDuplexSysFilterInput>;
  anchor?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulComponentDuplexArgs = {
  filter?: InputMaybe<ContentfulComponentDuplexFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulComponentDuplexSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulComponentHeroArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  content?: InputMaybe<ContentfulComponentHeroContentFilterInput>;
  imageLocation?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentHeroSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulComponentHeroArgs = {
  filter?: InputMaybe<ContentfulComponentHeroFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulComponentHeroSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulComponentCtaArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  content?: InputMaybe<ContentfulComponentCtaContentFilterInput>;
  boxed?: InputMaybe<BooleanQueryOperatorInput>;
  align?: InputMaybe<StringQueryOperatorInput>;
  background?: InputMaybe<StringQueryOperatorInput>;
  featuresOrientation?: InputMaybe<StringQueryOperatorInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentCtaSysFilterInput>;
  anchor?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<ContentfulComponentCtaDescriptionTextNodeFilterInput>;
  features?: InputMaybe<ContentfulComponentFeatureBlockFilterListInput>;
  childrenContentfulComponentCtaDescriptionTextNode?: InputMaybe<ContentfulComponentCtaDescriptionTextNodeFilterListInput>;
  childContentfulComponentCtaDescriptionTextNode?: InputMaybe<ContentfulComponentCtaDescriptionTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulComponentCtaArgs = {
  filter?: InputMaybe<ContentfulComponentCtaFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulComponentCtaSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulComponentActionItemArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  itemType?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  iconPosition?: InputMaybe<StringQueryOperatorInput>;
  component__feature_block?: InputMaybe<ContentfulComponentFeatureBlockFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentActionItemSysFilterInput>;
  align?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<StringQueryOperatorInput>;
  header?: InputMaybe<ContentfulHeaderFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulComponentActionItemArgs = {
  filter?: InputMaybe<ContentfulComponentActionItemFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulComponentActionItemSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulHeaderArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  logo?: InputMaybe<ContentfulAssetFilterInput>;
  cta?: InputMaybe<ContentfulComponentActionItemFilterInput>;
  links?: InputMaybe<ContentfulComponentNavigationLinkFilterListInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulHeaderSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulHeaderArgs = {
  filter?: InputMaybe<ContentfulHeaderFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulHeaderSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulComponentNavigationLinkArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  opensInNewTab?: InputMaybe<BooleanQueryOperatorInput>;
  iconPosition?: InputMaybe<StringQueryOperatorInput>;
  section?: InputMaybe<StringQueryOperatorInput>;
  footer?: InputMaybe<ContentfulFooterFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentNavigationLinkSysFilterInput>;
  header?: InputMaybe<ContentfulHeaderFilterListInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulComponentNavigationLinkArgs = {
  filter?: InputMaybe<ContentfulComponentNavigationLinkFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulComponentNavigationLinkSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulFooterArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  disclaimer?: InputMaybe<StringQueryOperatorInput>;
  sectionOrder?: InputMaybe<StringQueryOperatorInput>;
  logo?: InputMaybe<ContentfulAssetFilterInput>;
  links?: InputMaybe<ContentfulComponentNavigationLinkFilterListInput>;
  socialMediaLinks?: InputMaybe<ContentfulComponentNavigationLinkFilterListInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulFooterSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulFooterArgs = {
  filter?: InputMaybe<ContentfulFooterFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulFooterSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulCustomComponentArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulCustomComponentSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulCustomComponentArgs = {
  filter?: InputMaybe<ContentfulCustomComponentFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulCustomComponentSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ImageSharpSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulComponentFeatureBlockIconAttributesJsonNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
  stroke?: InputMaybe<IntQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeSysFilterInput>;
};


export type QueryAllContentfulComponentFeatureBlockIconAttributesJsonNodeArgs = {
  filter?: InputMaybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulComponentFeatureBlockDescriptionTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentFeatureBlockDescriptionTextNodeSysFilterInput>;
};


export type QueryAllContentfulComponentFeatureBlockDescriptionTextNodeArgs = {
  filter?: InputMaybe<ContentfulComponentFeatureBlockDescriptionTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulComponentFeatureBlockDescriptionTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulComponentCtaDescriptionTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentCtaDescriptionTextNodeSysFilterInput>;
};


export type QueryAllContentfulComponentCtaDescriptionTextNodeArgs = {
  filter?: InputMaybe<ContentfulComponentCtaDescriptionTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulComponentCtaDescriptionTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: InputMaybe<ContentfulContentTypeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulContentTypeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type GatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']>;
  ne?: InputMaybe<Scalars['GatsbyImageData']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  contentFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileConnectionSumArgs = {
  field: FileFieldSelector;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldSelector;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldSelector = {
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  mode?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  blksize?: InputMaybe<FieldSelectorEnum>;
  blocks?: InputMaybe<FieldSelectorEnum>;
  publicURL?: InputMaybe<FieldSelectorEnum>;
  childrenImageSharp?: InputMaybe<ImageSharpFieldSelector>;
  childImageSharp?: InputMaybe<ImageSharpFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type FieldSelectorEnum =
  | 'SELECT';

export type ImageSharpFieldSelector = {
  fixed?: InputMaybe<ImageSharpFixedFieldSelector>;
  fluid?: InputMaybe<ImageSharpFluidFieldSelector>;
  gatsbyImageData?: InputMaybe<FieldSelectorEnum>;
  original?: InputMaybe<ImageSharpOriginalFieldSelector>;
  resize?: InputMaybe<ImageSharpResizeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ImageSharpFixedFieldSelector = {
  base64?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  srcWebp?: InputMaybe<FieldSelectorEnum>;
  srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpFluidFieldSelector = {
  base64?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  srcWebp?: InputMaybe<FieldSelectorEnum>;
  srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  sizes?: InputMaybe<FieldSelectorEnum>;
  originalImg?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
  presentationWidth?: InputMaybe<FieldSelectorEnum>;
  presentationHeight?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpOriginalFieldSelector = {
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpResizeFieldSelector = {
  src?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
};

export type NodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type InternalFieldSelector = {
  content?: InputMaybe<FieldSelectorEnum>;
  contentDigest?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  fieldOwners?: InputMaybe<FieldSelectorEnum>;
  ignoreType?: InputMaybe<FieldSelectorEnum>;
  mediaType?: InputMaybe<FieldSelectorEnum>;
  owner?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
  contentFilePath?: InputMaybe<FieldSelectorEnum>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldSelector;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  absolutePath?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  prettySize?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  mode?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  ctime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  blksize?: InputMaybe<SortOrderEnum>;
  blocks?: InputMaybe<SortOrderEnum>;
  publicURL?: InputMaybe<SortOrderEnum>;
  childrenImageSharp?: InputMaybe<ImageSharpSortInput>;
  childImageSharp?: InputMaybe<ImageSharpSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type ImageSharpSortInput = {
  fixed?: InputMaybe<ImageSharpFixedSortInput>;
  fluid?: InputMaybe<ImageSharpFluidSortInput>;
  gatsbyImageData?: InputMaybe<SortOrderEnum>;
  original?: InputMaybe<ImageSharpOriginalSortInput>;
  resize?: InputMaybe<ImageSharpResizeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ImageSharpFixedSortInput = {
  base64?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  srcWebp?: InputMaybe<SortOrderEnum>;
  srcSetWebp?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpFluidSortInput = {
  base64?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  srcWebp?: InputMaybe<SortOrderEnum>;
  srcSetWebp?: InputMaybe<SortOrderEnum>;
  sizes?: InputMaybe<SortOrderEnum>;
  originalImg?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
  presentationWidth?: InputMaybe<SortOrderEnum>;
  presentationHeight?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpOriginalSortInput = {
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpResizeSortInput = {
  src?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
};

export type NodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type InternalSortInput = {
  content?: InputMaybe<SortOrderEnum>;
  contentDigest?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  fieldOwners?: InputMaybe<SortOrderEnum>;
  ignoreType?: InputMaybe<SortOrderEnum>;
  mediaType?: InputMaybe<SortOrderEnum>;
  owner?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
  contentFilePath?: InputMaybe<SortOrderEnum>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldSelector;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldSelector = {
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  mode?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldSelector;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  absolutePath?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  prettySize?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  mode?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  ctime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteGraphqlTypegenFilterInput = {
  typesOutputPath?: InputMaybe<StringQueryOperatorInput>;
  documentSearchPaths?: InputMaybe<StringQueryOperatorInput>;
  generateOnBuild?: InputMaybe<BooleanQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldSelector;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFieldSelector>;
  port?: InputMaybe<FieldSelectorEnum>;
  host?: InputMaybe<FieldSelectorEnum>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenFieldSelector>;
  polyfill?: InputMaybe<FieldSelectorEnum>;
  pathPrefix?: InputMaybe<FieldSelectorEnum>;
  jsxRuntime?: InputMaybe<FieldSelectorEnum>;
  trailingSlash?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SiteSiteMetadataFieldSelector = {
  title?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  siteUrl?: InputMaybe<FieldSelectorEnum>;
};

export type SiteGraphqlTypegenFieldSelector = {
  typesOutputPath?: InputMaybe<FieldSelectorEnum>;
  documentSearchPaths?: InputMaybe<FieldSelectorEnum>;
  generateOnBuild?: InputMaybe<FieldSelectorEnum>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldSelector;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenFilterInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataSortInput>;
  port?: InputMaybe<SortOrderEnum>;
  host?: InputMaybe<SortOrderEnum>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenSortInput>;
  polyfill?: InputMaybe<SortOrderEnum>;
  pathPrefix?: InputMaybe<SortOrderEnum>;
  jsxRuntime?: InputMaybe<SortOrderEnum>;
  trailingSlash?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SiteSiteMetadataSortInput = {
  title?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  siteUrl?: InputMaybe<SortOrderEnum>;
};

export type SiteGraphqlTypegenSortInput = {
  typesOutputPath?: InputMaybe<SortOrderEnum>;
  documentSearchPaths?: InputMaybe<SortOrderEnum>;
  generateOnBuild?: InputMaybe<SortOrderEnum>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldSelector = {
  functionRoute?: InputMaybe<FieldSelectorEnum>;
  pluginName?: InputMaybe<FieldSelectorEnum>;
  originalAbsoluteFilePath?: InputMaybe<FieldSelectorEnum>;
  originalRelativeFilePath?: InputMaybe<FieldSelectorEnum>;
  relativeCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
  absoluteCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  functionRoute?: InputMaybe<SortOrderEnum>;
  pluginName?: InputMaybe<SortOrderEnum>;
  originalAbsoluteFilePath?: InputMaybe<SortOrderEnum>;
  originalRelativeFilePath?: InputMaybe<SortOrderEnum>;
  relativeCompiledFilePath?: InputMaybe<SortOrderEnum>;
  absoluteCompiledFilePath?: InputMaybe<SortOrderEnum>;
  matchPath?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldSelector;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldSelector = {
  path?: InputMaybe<FieldSelectorEnum>;
  component?: InputMaybe<FieldSelectorEnum>;
  internalComponentName?: InputMaybe<FieldSelectorEnum>;
  componentChunkName?: InputMaybe<FieldSelectorEnum>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  pageContext?: InputMaybe<FieldSelectorEnum>;
  pluginCreator?: InputMaybe<SitePluginFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SitePluginFieldSelector = {
  resolve?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  version?: InputMaybe<FieldSelectorEnum>;
  nodeAPIs?: InputMaybe<FieldSelectorEnum>;
  browserAPIs?: InputMaybe<FieldSelectorEnum>;
  ssrAPIs?: InputMaybe<FieldSelectorEnum>;
  pluginFilepath?: InputMaybe<FieldSelectorEnum>;
  pluginOptions?: InputMaybe<FieldSelectorEnum>;
  packageJson?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldSelector;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  path?: InputMaybe<SortOrderEnum>;
  component?: InputMaybe<SortOrderEnum>;
  internalComponentName?: InputMaybe<SortOrderEnum>;
  componentChunkName?: InputMaybe<SortOrderEnum>;
  matchPath?: InputMaybe<SortOrderEnum>;
  pageContext?: InputMaybe<SortOrderEnum>;
  pluginCreator?: InputMaybe<SitePluginSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SitePluginSortInput = {
  resolve?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  version?: InputMaybe<SortOrderEnum>;
  nodeAPIs?: InputMaybe<SortOrderEnum>;
  browserAPIs?: InputMaybe<SortOrderEnum>;
  ssrAPIs?: InputMaybe<SortOrderEnum>;
  pluginFilepath?: InputMaybe<SortOrderEnum>;
  pluginOptions?: InputMaybe<SortOrderEnum>;
  packageJson?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldSelector;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldSelector;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulEntryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulEntryGroupConnection>;
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryConnectionMaxArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryConnectionMinArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryConnectionSumArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulEntryFieldSelector;
};

export type ContentfulEntryEdge = {
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export type ContentfulEntryFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulEntryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulEntryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulEntryGroupConnectionDistinctArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryGroupConnectionMaxArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryGroupConnectionMinArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryGroupConnectionSumArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulEntryFieldSelector;
};

export type ContentfulEntryFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulEntrySortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: InputMaybe<StringQueryOperatorInput>;
  details?: InputMaybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: InputMaybe<IntQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
};

export type RemoteFileResizeFilterInput = {
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetConnectionMaxArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetConnectionMinArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetConnectionSumArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAssetFieldSelector;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  gatsbyImageData?: InputMaybe<FieldSelectorEnum>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  file?: InputMaybe<ContentfulAssetFileFieldSelector>;
  title?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulAssetSysFieldSelector>;
  url?: InputMaybe<FieldSelectorEnum>;
  placeholderUrl?: InputMaybe<FieldSelectorEnum>;
  mimeType?: InputMaybe<FieldSelectorEnum>;
  filename?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  filesize?: InputMaybe<FieldSelectorEnum>;
  publicUrl?: InputMaybe<FieldSelectorEnum>;
  resize?: InputMaybe<RemoteFileResizeFieldSelector>;
  gatsbyImage?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAssetFileFieldSelector = {
  url?: InputMaybe<FieldSelectorEnum>;
  details?: InputMaybe<ContentfulAssetFileDetailsFieldSelector>;
  fileName?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAssetFileDetailsFieldSelector = {
  size?: InputMaybe<FieldSelectorEnum>;
  image?: InputMaybe<ContentfulAssetFileDetailsImageFieldSelector>;
};

export type ContentfulAssetFileDetailsImageFieldSelector = {
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAssetSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
};

export type RemoteFileResizeFieldSelector = {
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAssetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulAssetGroupConnectionDistinctArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetGroupConnectionMaxArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetGroupConnectionMinArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetGroupConnectionSumArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAssetFieldSelector;
};

export type ContentfulAssetFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  placeholderUrl?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  gatsbyImage?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
};

export type ContentfulAssetSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  gatsbyImageData?: InputMaybe<SortOrderEnum>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  file?: InputMaybe<ContentfulAssetFileSortInput>;
  title?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulAssetSysSortInput>;
  url?: InputMaybe<SortOrderEnum>;
  placeholderUrl?: InputMaybe<SortOrderEnum>;
  mimeType?: InputMaybe<SortOrderEnum>;
  filename?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  filesize?: InputMaybe<SortOrderEnum>;
  publicUrl?: InputMaybe<SortOrderEnum>;
  resize?: InputMaybe<RemoteFileResizeSortInput>;
  gatsbyImage?: InputMaybe<SortOrderEnum>;
};

export type ContentfulAssetFileSortInput = {
  url?: InputMaybe<SortOrderEnum>;
  details?: InputMaybe<ContentfulAssetFileDetailsSortInput>;
  fileName?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<SortOrderEnum>;
};

export type ContentfulAssetFileDetailsSortInput = {
  size?: InputMaybe<SortOrderEnum>;
  image?: InputMaybe<ContentfulAssetFileDetailsImageSortInput>;
};

export type ContentfulAssetFileDetailsImageSortInput = {
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
};

export type ContentfulAssetSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
};

export type RemoteFileResizeSortInput = {
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
};

export type ContentfulPageFilterListInput = {
  elemMatch?: InputMaybe<ContentfulPageFilterInput>;
};

export type ContentfulPageFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  internalName?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulPageSysFilterInput>;
  header?: InputMaybe<ContentfulHeaderFilterInput>;
  footer?: InputMaybe<ContentfulFooterFilterInput>;
  seo?: InputMaybe<ContentfulSeoMetadataFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulPageSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulPageSysContentTypeFilterInput>;
};

export type ContentfulPageSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulPageSysContentTypeSysFilterInput>;
};

export type ContentfulPageSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulHeaderFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  logo?: InputMaybe<ContentfulAssetFilterInput>;
  cta?: InputMaybe<ContentfulComponentActionItemFilterInput>;
  links?: InputMaybe<ContentfulComponentNavigationLinkFilterListInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulHeaderSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulComponentActionItemFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  itemType?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  iconPosition?: InputMaybe<StringQueryOperatorInput>;
  component__feature_block?: InputMaybe<ContentfulComponentFeatureBlockFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentActionItemSysFilterInput>;
  align?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<StringQueryOperatorInput>;
  header?: InputMaybe<ContentfulHeaderFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulComponentFeatureBlockFilterListInput = {
  elemMatch?: InputMaybe<ContentfulComponentFeatureBlockFilterInput>;
};

export type ContentfulComponentFeatureBlockFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  layout?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  action?: InputMaybe<ContentfulComponentActionItemFilterInput>;
  iconAttributes?: InputMaybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentFeatureBlockSysFilterInput>;
  component__cta?: InputMaybe<ContentfulComponentCtaFilterListInput>;
  description?: InputMaybe<ContentfulComponentFeatureBlockDescriptionTextNodeFilterInput>;
  childrenContentfulComponentFeatureBlockIconAttributesJsonNode?: InputMaybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeFilterListInput>;
  childContentfulComponentFeatureBlockIconAttributesJsonNode?: InputMaybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeFilterInput>;
  childrenContentfulComponentFeatureBlockDescriptionTextNode?: InputMaybe<ContentfulComponentFeatureBlockDescriptionTextNodeFilterListInput>;
  childContentfulComponentFeatureBlockDescriptionTextNode?: InputMaybe<ContentfulComponentFeatureBlockDescriptionTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulComponentFeatureBlockIconAttributesJsonNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
  stroke?: InputMaybe<IntQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeSysFilterInput>;
};

export type ContentfulComponentFeatureBlockIconAttributesJsonNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulComponentFeatureBlockSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulComponentFeatureBlockSysContentTypeFilterInput>;
};

export type ContentfulComponentFeatureBlockSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulComponentFeatureBlockSysContentTypeSysFilterInput>;
};

export type ContentfulComponentFeatureBlockSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulComponentCtaFilterListInput = {
  elemMatch?: InputMaybe<ContentfulComponentCtaFilterInput>;
};

export type ContentfulComponentCtaFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  content?: InputMaybe<ContentfulComponentCtaContentFilterInput>;
  boxed?: InputMaybe<BooleanQueryOperatorInput>;
  align?: InputMaybe<StringQueryOperatorInput>;
  background?: InputMaybe<StringQueryOperatorInput>;
  featuresOrientation?: InputMaybe<StringQueryOperatorInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentCtaSysFilterInput>;
  anchor?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<ContentfulComponentCtaDescriptionTextNodeFilterInput>;
  features?: InputMaybe<ContentfulComponentFeatureBlockFilterListInput>;
  childrenContentfulComponentCtaDescriptionTextNode?: InputMaybe<ContentfulComponentCtaDescriptionTextNodeFilterListInput>;
  childContentfulComponentCtaDescriptionTextNode?: InputMaybe<ContentfulComponentCtaDescriptionTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulComponentCtaContentFilterInput = {
  raw?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulComponentCtaSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulComponentCtaSysContentTypeFilterInput>;
};

export type ContentfulComponentCtaSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulComponentCtaSysContentTypeSysFilterInput>;
};

export type ContentfulComponentCtaSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulComponentCtaDescriptionTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentCtaDescriptionTextNodeSysFilterInput>;
};

export type ContentfulComponentCtaDescriptionTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulComponentCtaDescriptionTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulComponentCtaDescriptionTextNodeFilterInput>;
};

export type ContentfulComponentFeatureBlockDescriptionTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentFeatureBlockDescriptionTextNodeSysFilterInput>;
};

export type ContentfulComponentFeatureBlockDescriptionTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulComponentFeatureBlockIconAttributesJsonNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeFilterInput>;
};

export type ContentfulComponentFeatureBlockDescriptionTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulComponentFeatureBlockDescriptionTextNodeFilterInput>;
};

export type ContentfulComponentActionItemSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulComponentActionItemSysContentTypeFilterInput>;
};

export type ContentfulComponentActionItemSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulComponentActionItemSysContentTypeSysFilterInput>;
};

export type ContentfulComponentActionItemSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulHeaderFilterListInput = {
  elemMatch?: InputMaybe<ContentfulHeaderFilterInput>;
};

export type ContentfulComponentNavigationLinkFilterListInput = {
  elemMatch?: InputMaybe<ContentfulComponentNavigationLinkFilterInput>;
};

export type ContentfulComponentNavigationLinkFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  opensInNewTab?: InputMaybe<BooleanQueryOperatorInput>;
  iconPosition?: InputMaybe<StringQueryOperatorInput>;
  section?: InputMaybe<StringQueryOperatorInput>;
  footer?: InputMaybe<ContentfulFooterFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentNavigationLinkSysFilterInput>;
  header?: InputMaybe<ContentfulHeaderFilterListInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulFooterFilterListInput = {
  elemMatch?: InputMaybe<ContentfulFooterFilterInput>;
};

export type ContentfulFooterFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  disclaimer?: InputMaybe<StringQueryOperatorInput>;
  sectionOrder?: InputMaybe<StringQueryOperatorInput>;
  logo?: InputMaybe<ContentfulAssetFilterInput>;
  links?: InputMaybe<ContentfulComponentNavigationLinkFilterListInput>;
  socialMediaLinks?: InputMaybe<ContentfulComponentNavigationLinkFilterListInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulFooterSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulFooterSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulFooterSysContentTypeFilterInput>;
};

export type ContentfulFooterSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulFooterSysContentTypeSysFilterInput>;
};

export type ContentfulFooterSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulComponentNavigationLinkSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulComponentNavigationLinkSysContentTypeFilterInput>;
};

export type ContentfulComponentNavigationLinkSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulComponentNavigationLinkSysContentTypeSysFilterInput>;
};

export type ContentfulComponentNavigationLinkSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulHeaderSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulHeaderSysContentTypeFilterInput>;
};

export type ContentfulHeaderSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulHeaderSysContentTypeSysFilterInput>;
};

export type ContentfulHeaderSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulSeoMetadataFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  seoTitle?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  keywords?: InputMaybe<StringQueryOperatorInput>;
  no_index?: InputMaybe<BooleanQueryOperatorInput>;
  no_follow?: InputMaybe<BooleanQueryOperatorInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulSeoMetadataSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulSeoMetadataSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulSeoMetadataSysContentTypeFilterInput>;
};

export type ContentfulSeoMetadataSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulSeoMetadataSysContentTypeSysFilterInput>;
};

export type ContentfulSeoMetadataSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulSeoMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSeoMetadataEdge>;
  nodes: Array<ContentfulSeoMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulSeoMetadataGroupConnection>;
};


export type ContentfulSeoMetadataConnectionDistinctArgs = {
  field: ContentfulSeoMetadataFieldSelector;
};


export type ContentfulSeoMetadataConnectionMaxArgs = {
  field: ContentfulSeoMetadataFieldSelector;
};


export type ContentfulSeoMetadataConnectionMinArgs = {
  field: ContentfulSeoMetadataFieldSelector;
};


export type ContentfulSeoMetadataConnectionSumArgs = {
  field: ContentfulSeoMetadataFieldSelector;
};


export type ContentfulSeoMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulSeoMetadataFieldSelector;
};

export type ContentfulSeoMetadataEdge = {
  next?: Maybe<ContentfulSeoMetadata>;
  node: ContentfulSeoMetadata;
  previous?: Maybe<ContentfulSeoMetadata>;
};

export type ContentfulSeoMetadataFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  seoTitle?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  keywords?: InputMaybe<FieldSelectorEnum>;
  no_index?: InputMaybe<FieldSelectorEnum>;
  no_follow?: InputMaybe<FieldSelectorEnum>;
  page?: InputMaybe<ContentfulPageFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulSeoMetadataSysFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulPageFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  internalName?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  slug?: InputMaybe<FieldSelectorEnum>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulPageSysFieldSelector>;
  header?: InputMaybe<ContentfulHeaderFieldSelector>;
  footer?: InputMaybe<ContentfulFooterFieldSelector>;
  seo?: InputMaybe<ContentfulSeoMetadataFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulPageSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulPageSysContentTypeFieldSelector>;
};

export type ContentfulPageSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulPageSysContentTypeSysFieldSelector>;
};

export type ContentfulPageSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulHeaderFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  logo?: InputMaybe<ContentfulAssetFieldSelector>;
  cta?: InputMaybe<ContentfulComponentActionItemFieldSelector>;
  links?: InputMaybe<ContentfulComponentNavigationLinkFieldSelector>;
  page?: InputMaybe<ContentfulPageFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulHeaderSysFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulComponentActionItemFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  text?: InputMaybe<FieldSelectorEnum>;
  link?: InputMaybe<FieldSelectorEnum>;
  itemType?: InputMaybe<FieldSelectorEnum>;
  icon?: InputMaybe<FieldSelectorEnum>;
  iconPosition?: InputMaybe<FieldSelectorEnum>;
  component__feature_block?: InputMaybe<ContentfulComponentFeatureBlockFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulComponentActionItemSysFieldSelector>;
  align?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  header?: InputMaybe<ContentfulHeaderFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulComponentFeatureBlockFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  layout?: InputMaybe<FieldSelectorEnum>;
  icon?: InputMaybe<FieldSelectorEnum>;
  action?: InputMaybe<ContentfulComponentActionItemFieldSelector>;
  iconAttributes?: InputMaybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulComponentFeatureBlockSysFieldSelector>;
  component__cta?: InputMaybe<ContentfulComponentCtaFieldSelector>;
  description?: InputMaybe<ContentfulComponentFeatureBlockDescriptionTextNodeFieldSelector>;
  childrenContentfulComponentFeatureBlockIconAttributesJsonNode?: InputMaybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeFieldSelector>;
  childContentfulComponentFeatureBlockIconAttributesJsonNode?: InputMaybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeFieldSelector>;
  childrenContentfulComponentFeatureBlockDescriptionTextNode?: InputMaybe<ContentfulComponentFeatureBlockDescriptionTextNodeFieldSelector>;
  childContentfulComponentFeatureBlockDescriptionTextNode?: InputMaybe<ContentfulComponentFeatureBlockDescriptionTextNodeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulComponentFeatureBlockIconAttributesJsonNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  size?: InputMaybe<FieldSelectorEnum>;
  color?: InputMaybe<FieldSelectorEnum>;
  stroke?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeSysFieldSelector>;
};

export type ContentfulComponentFeatureBlockIconAttributesJsonNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulComponentFeatureBlockSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulComponentFeatureBlockSysContentTypeFieldSelector>;
};

export type ContentfulComponentFeatureBlockSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulComponentFeatureBlockSysContentTypeSysFieldSelector>;
};

export type ContentfulComponentFeatureBlockSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulComponentCtaFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  content?: InputMaybe<ContentfulComponentCtaContentFieldSelector>;
  boxed?: InputMaybe<FieldSelectorEnum>;
  align?: InputMaybe<FieldSelectorEnum>;
  background?: InputMaybe<FieldSelectorEnum>;
  featuresOrientation?: InputMaybe<FieldSelectorEnum>;
  page?: InputMaybe<ContentfulPageFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulComponentCtaSysFieldSelector>;
  anchor?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<ContentfulComponentCtaDescriptionTextNodeFieldSelector>;
  features?: InputMaybe<ContentfulComponentFeatureBlockFieldSelector>;
  childrenContentfulComponentCtaDescriptionTextNode?: InputMaybe<ContentfulComponentCtaDescriptionTextNodeFieldSelector>;
  childContentfulComponentCtaDescriptionTextNode?: InputMaybe<ContentfulComponentCtaDescriptionTextNodeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulComponentCtaContentFieldSelector = {
  raw?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulComponentCtaSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulComponentCtaSysContentTypeFieldSelector>;
};

export type ContentfulComponentCtaSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulComponentCtaSysContentTypeSysFieldSelector>;
};

export type ContentfulComponentCtaSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulComponentCtaDescriptionTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  description?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulComponentCtaDescriptionTextNodeSysFieldSelector>;
};

export type ContentfulComponentCtaDescriptionTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulComponentFeatureBlockDescriptionTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  description?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulComponentFeatureBlockDescriptionTextNodeSysFieldSelector>;
};

export type ContentfulComponentFeatureBlockDescriptionTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulComponentActionItemSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulComponentActionItemSysContentTypeFieldSelector>;
};

export type ContentfulComponentActionItemSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulComponentActionItemSysContentTypeSysFieldSelector>;
};

export type ContentfulComponentActionItemSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulComponentNavigationLinkFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  link?: InputMaybe<FieldSelectorEnum>;
  opensInNewTab?: InputMaybe<FieldSelectorEnum>;
  iconPosition?: InputMaybe<FieldSelectorEnum>;
  section?: InputMaybe<FieldSelectorEnum>;
  footer?: InputMaybe<ContentfulFooterFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulComponentNavigationLinkSysFieldSelector>;
  header?: InputMaybe<ContentfulHeaderFieldSelector>;
  icon?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulFooterFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  disclaimer?: InputMaybe<FieldSelectorEnum>;
  sectionOrder?: InputMaybe<FieldSelectorEnum>;
  logo?: InputMaybe<ContentfulAssetFieldSelector>;
  links?: InputMaybe<ContentfulComponentNavigationLinkFieldSelector>;
  socialMediaLinks?: InputMaybe<ContentfulComponentNavigationLinkFieldSelector>;
  page?: InputMaybe<ContentfulPageFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulFooterSysFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulFooterSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulFooterSysContentTypeFieldSelector>;
};

export type ContentfulFooterSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulFooterSysContentTypeSysFieldSelector>;
};

export type ContentfulFooterSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulComponentNavigationLinkSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulComponentNavigationLinkSysContentTypeFieldSelector>;
};

export type ContentfulComponentNavigationLinkSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulComponentNavigationLinkSysContentTypeSysFieldSelector>;
};

export type ContentfulComponentNavigationLinkSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulHeaderSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulHeaderSysContentTypeFieldSelector>;
};

export type ContentfulHeaderSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulHeaderSysContentTypeSysFieldSelector>;
};

export type ContentfulHeaderSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulSeoMetadataSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulSeoMetadataSysContentTypeFieldSelector>;
};

export type ContentfulSeoMetadataSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulSeoMetadataSysContentTypeSysFieldSelector>;
};

export type ContentfulSeoMetadataSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulSeoMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSeoMetadataEdge>;
  nodes: Array<ContentfulSeoMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulSeoMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulSeoMetadataGroupConnectionDistinctArgs = {
  field: ContentfulSeoMetadataFieldSelector;
};


export type ContentfulSeoMetadataGroupConnectionMaxArgs = {
  field: ContentfulSeoMetadataFieldSelector;
};


export type ContentfulSeoMetadataGroupConnectionMinArgs = {
  field: ContentfulSeoMetadataFieldSelector;
};


export type ContentfulSeoMetadataGroupConnectionSumArgs = {
  field: ContentfulSeoMetadataFieldSelector;
};


export type ContentfulSeoMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulSeoMetadataFieldSelector;
};

export type ContentfulSeoMetadataSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  seoTitle?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  keywords?: InputMaybe<SortOrderEnum>;
  no_index?: InputMaybe<SortOrderEnum>;
  no_follow?: InputMaybe<SortOrderEnum>;
  page?: InputMaybe<ContentfulPageSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulSeoMetadataSysSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulPageSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  internalName?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  slug?: InputMaybe<SortOrderEnum>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulPageSysSortInput>;
  header?: InputMaybe<ContentfulHeaderSortInput>;
  footer?: InputMaybe<ContentfulFooterSortInput>;
  seo?: InputMaybe<ContentfulSeoMetadataSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulPageSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulPageSysContentTypeSortInput>;
};

export type ContentfulPageSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulPageSysContentTypeSysSortInput>;
};

export type ContentfulPageSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulHeaderSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  logo?: InputMaybe<ContentfulAssetSortInput>;
  cta?: InputMaybe<ContentfulComponentActionItemSortInput>;
  links?: InputMaybe<ContentfulComponentNavigationLinkSortInput>;
  page?: InputMaybe<ContentfulPageSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulHeaderSysSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulComponentActionItemSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  text?: InputMaybe<SortOrderEnum>;
  link?: InputMaybe<SortOrderEnum>;
  itemType?: InputMaybe<SortOrderEnum>;
  icon?: InputMaybe<SortOrderEnum>;
  iconPosition?: InputMaybe<SortOrderEnum>;
  component__feature_block?: InputMaybe<ContentfulComponentFeatureBlockSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulComponentActionItemSysSortInput>;
  align?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  header?: InputMaybe<ContentfulHeaderSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulComponentFeatureBlockSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  layout?: InputMaybe<SortOrderEnum>;
  icon?: InputMaybe<SortOrderEnum>;
  action?: InputMaybe<ContentfulComponentActionItemSortInput>;
  iconAttributes?: InputMaybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulComponentFeatureBlockSysSortInput>;
  component__cta?: InputMaybe<ContentfulComponentCtaSortInput>;
  description?: InputMaybe<ContentfulComponentFeatureBlockDescriptionTextNodeSortInput>;
  childrenContentfulComponentFeatureBlockIconAttributesJsonNode?: InputMaybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeSortInput>;
  childContentfulComponentFeatureBlockIconAttributesJsonNode?: InputMaybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeSortInput>;
  childrenContentfulComponentFeatureBlockDescriptionTextNode?: InputMaybe<ContentfulComponentFeatureBlockDescriptionTextNodeSortInput>;
  childContentfulComponentFeatureBlockDescriptionTextNode?: InputMaybe<ContentfulComponentFeatureBlockDescriptionTextNodeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulComponentFeatureBlockIconAttributesJsonNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  size?: InputMaybe<SortOrderEnum>;
  color?: InputMaybe<SortOrderEnum>;
  stroke?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulComponentFeatureBlockIconAttributesJsonNodeSysSortInput>;
};

export type ContentfulComponentFeatureBlockIconAttributesJsonNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulComponentFeatureBlockSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulComponentFeatureBlockSysContentTypeSortInput>;
};

export type ContentfulComponentFeatureBlockSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulComponentFeatureBlockSysContentTypeSysSortInput>;
};

export type ContentfulComponentFeatureBlockSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulComponentCtaSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  content?: InputMaybe<ContentfulComponentCtaContentSortInput>;
  boxed?: InputMaybe<SortOrderEnum>;
  align?: InputMaybe<SortOrderEnum>;
  background?: InputMaybe<SortOrderEnum>;
  featuresOrientation?: InputMaybe<SortOrderEnum>;
  page?: InputMaybe<ContentfulPageSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulComponentCtaSysSortInput>;
  anchor?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<ContentfulComponentCtaDescriptionTextNodeSortInput>;
  features?: InputMaybe<ContentfulComponentFeatureBlockSortInput>;
  childrenContentfulComponentCtaDescriptionTextNode?: InputMaybe<ContentfulComponentCtaDescriptionTextNodeSortInput>;
  childContentfulComponentCtaDescriptionTextNode?: InputMaybe<ContentfulComponentCtaDescriptionTextNodeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulComponentCtaContentSortInput = {
  raw?: InputMaybe<SortOrderEnum>;
};

export type ContentfulComponentCtaSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulComponentCtaSysContentTypeSortInput>;
};

export type ContentfulComponentCtaSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulComponentCtaSysContentTypeSysSortInput>;
};

export type ContentfulComponentCtaSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulComponentCtaDescriptionTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  description?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulComponentCtaDescriptionTextNodeSysSortInput>;
};

export type ContentfulComponentCtaDescriptionTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulComponentFeatureBlockDescriptionTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  description?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulComponentFeatureBlockDescriptionTextNodeSysSortInput>;
};

export type ContentfulComponentFeatureBlockDescriptionTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulComponentActionItemSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulComponentActionItemSysContentTypeSortInput>;
};

export type ContentfulComponentActionItemSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulComponentActionItemSysContentTypeSysSortInput>;
};

export type ContentfulComponentActionItemSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulComponentNavigationLinkSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  link?: InputMaybe<SortOrderEnum>;
  opensInNewTab?: InputMaybe<SortOrderEnum>;
  iconPosition?: InputMaybe<SortOrderEnum>;
  section?: InputMaybe<SortOrderEnum>;
  footer?: InputMaybe<ContentfulFooterSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulComponentNavigationLinkSysSortInput>;
  header?: InputMaybe<ContentfulHeaderSortInput>;
  icon?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulFooterSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  disclaimer?: InputMaybe<SortOrderEnum>;
  sectionOrder?: InputMaybe<SortOrderEnum>;
  logo?: InputMaybe<ContentfulAssetSortInput>;
  links?: InputMaybe<ContentfulComponentNavigationLinkSortInput>;
  socialMediaLinks?: InputMaybe<ContentfulComponentNavigationLinkSortInput>;
  page?: InputMaybe<ContentfulPageSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulFooterSysSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulFooterSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulFooterSysContentTypeSortInput>;
};

export type ContentfulFooterSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulFooterSysContentTypeSysSortInput>;
};

export type ContentfulFooterSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulComponentNavigationLinkSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulComponentNavigationLinkSysContentTypeSortInput>;
};

export type ContentfulComponentNavigationLinkSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulComponentNavigationLinkSysContentTypeSysSortInput>;
};

export type ContentfulComponentNavigationLinkSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulHeaderSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulHeaderSysContentTypeSortInput>;
};

export type ContentfulHeaderSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulHeaderSysContentTypeSysSortInput>;
};

export type ContentfulHeaderSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulSeoMetadataSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulSeoMetadataSysContentTypeSortInput>;
};

export type ContentfulSeoMetadataSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulSeoMetadataSysContentTypeSysSortInput>;
};

export type ContentfulSeoMetadataSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulPageGroupConnection>;
};


export type ContentfulPageConnectionDistinctArgs = {
  field: ContentfulPageFieldSelector;
};


export type ContentfulPageConnectionMaxArgs = {
  field: ContentfulPageFieldSelector;
};


export type ContentfulPageConnectionMinArgs = {
  field: ContentfulPageFieldSelector;
};


export type ContentfulPageConnectionSumArgs = {
  field: ContentfulPageFieldSelector;
};


export type ContentfulPageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulPageFieldSelector;
};

export type ContentfulPageEdge = {
  next?: Maybe<ContentfulPage>;
  node: ContentfulPage;
  previous?: Maybe<ContentfulPage>;
};

export type ContentfulPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulPageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulPageGroupConnectionDistinctArgs = {
  field: ContentfulPageFieldSelector;
};


export type ContentfulPageGroupConnectionMaxArgs = {
  field: ContentfulPageFieldSelector;
};


export type ContentfulPageGroupConnectionMinArgs = {
  field: ContentfulPageFieldSelector;
};


export type ContentfulPageGroupConnectionSumArgs = {
  field: ContentfulPageFieldSelector;
};


export type ContentfulPageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulPageFieldSelector;
};

export type ContentfulComponentFeatureBlockConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentFeatureBlockEdge>;
  nodes: Array<ContentfulComponentFeatureBlock>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentFeatureBlockGroupConnection>;
};


export type ContentfulComponentFeatureBlockConnectionDistinctArgs = {
  field: ContentfulComponentFeatureBlockFieldSelector;
};


export type ContentfulComponentFeatureBlockConnectionMaxArgs = {
  field: ContentfulComponentFeatureBlockFieldSelector;
};


export type ContentfulComponentFeatureBlockConnectionMinArgs = {
  field: ContentfulComponentFeatureBlockFieldSelector;
};


export type ContentfulComponentFeatureBlockConnectionSumArgs = {
  field: ContentfulComponentFeatureBlockFieldSelector;
};


export type ContentfulComponentFeatureBlockConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentFeatureBlockFieldSelector;
};

export type ContentfulComponentFeatureBlockEdge = {
  next?: Maybe<ContentfulComponentFeatureBlock>;
  node: ContentfulComponentFeatureBlock;
  previous?: Maybe<ContentfulComponentFeatureBlock>;
};

export type ContentfulComponentFeatureBlockGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentFeatureBlockEdge>;
  nodes: Array<ContentfulComponentFeatureBlock>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentFeatureBlockGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulComponentFeatureBlockGroupConnectionDistinctArgs = {
  field: ContentfulComponentFeatureBlockFieldSelector;
};


export type ContentfulComponentFeatureBlockGroupConnectionMaxArgs = {
  field: ContentfulComponentFeatureBlockFieldSelector;
};


export type ContentfulComponentFeatureBlockGroupConnectionMinArgs = {
  field: ContentfulComponentFeatureBlockFieldSelector;
};


export type ContentfulComponentFeatureBlockGroupConnectionSumArgs = {
  field: ContentfulComponentFeatureBlockFieldSelector;
};


export type ContentfulComponentFeatureBlockGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentFeatureBlockFieldSelector;
};

export type ContentfulComponentDuplexDescriptionFilterInput = {
  raw?: InputMaybe<StringQueryOperatorInput>;
  references?: InputMaybe<ContentfulComponentFeatureBlockFilterListInput>;
};

export type ContentfulComponentDuplexSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulComponentDuplexSysContentTypeFilterInput>;
};

export type ContentfulComponentDuplexSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulComponentDuplexSysContentTypeSysFilterInput>;
};

export type ContentfulComponentDuplexSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulComponentDuplexConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentDuplexEdge>;
  nodes: Array<ContentfulComponentDuplex>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentDuplexGroupConnection>;
};


export type ContentfulComponentDuplexConnectionDistinctArgs = {
  field: ContentfulComponentDuplexFieldSelector;
};


export type ContentfulComponentDuplexConnectionMaxArgs = {
  field: ContentfulComponentDuplexFieldSelector;
};


export type ContentfulComponentDuplexConnectionMinArgs = {
  field: ContentfulComponentDuplexFieldSelector;
};


export type ContentfulComponentDuplexConnectionSumArgs = {
  field: ContentfulComponentDuplexFieldSelector;
};


export type ContentfulComponentDuplexConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentDuplexFieldSelector;
};

export type ContentfulComponentDuplexEdge = {
  next?: Maybe<ContentfulComponentDuplex>;
  node: ContentfulComponentDuplex;
  previous?: Maybe<ContentfulComponentDuplex>;
};

export type ContentfulComponentDuplexFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<ContentfulComponentDuplexDescriptionFieldSelector>;
  align?: InputMaybe<FieldSelectorEnum>;
  image?: InputMaybe<ContentfulAssetFieldSelector>;
  page?: InputMaybe<ContentfulPageFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulComponentDuplexSysFieldSelector>;
  anchor?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulComponentDuplexDescriptionFieldSelector = {
  raw?: InputMaybe<FieldSelectorEnum>;
  references?: InputMaybe<ContentfulComponentFeatureBlockFieldSelector>;
};

export type ContentfulComponentDuplexSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulComponentDuplexSysContentTypeFieldSelector>;
};

export type ContentfulComponentDuplexSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulComponentDuplexSysContentTypeSysFieldSelector>;
};

export type ContentfulComponentDuplexSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulComponentDuplexGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentDuplexEdge>;
  nodes: Array<ContentfulComponentDuplex>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentDuplexGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulComponentDuplexGroupConnectionDistinctArgs = {
  field: ContentfulComponentDuplexFieldSelector;
};


export type ContentfulComponentDuplexGroupConnectionMaxArgs = {
  field: ContentfulComponentDuplexFieldSelector;
};


export type ContentfulComponentDuplexGroupConnectionMinArgs = {
  field: ContentfulComponentDuplexFieldSelector;
};


export type ContentfulComponentDuplexGroupConnectionSumArgs = {
  field: ContentfulComponentDuplexFieldSelector;
};


export type ContentfulComponentDuplexGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentDuplexFieldSelector;
};

export type ContentfulComponentDuplexFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<ContentfulComponentDuplexDescriptionFilterInput>;
  align?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentDuplexSysFilterInput>;
  anchor?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulComponentDuplexSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<ContentfulComponentDuplexDescriptionSortInput>;
  align?: InputMaybe<SortOrderEnum>;
  image?: InputMaybe<ContentfulAssetSortInput>;
  page?: InputMaybe<ContentfulPageSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulComponentDuplexSysSortInput>;
  anchor?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulComponentDuplexDescriptionSortInput = {
  raw?: InputMaybe<SortOrderEnum>;
  references?: InputMaybe<ContentfulComponentFeatureBlockSortInput>;
};

export type ContentfulComponentDuplexSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulComponentDuplexSysContentTypeSortInput>;
};

export type ContentfulComponentDuplexSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulComponentDuplexSysContentTypeSysSortInput>;
};

export type ContentfulComponentDuplexSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulComponentHeroContentFilterInput = {
  raw?: InputMaybe<StringQueryOperatorInput>;
  references?: InputMaybe<ContentfulComponentActionItemFilterListInput>;
};

export type ContentfulComponentActionItemFilterListInput = {
  elemMatch?: InputMaybe<ContentfulComponentActionItemFilterInput>;
};

export type ContentfulComponentHeroSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulComponentHeroSysContentTypeFilterInput>;
};

export type ContentfulComponentHeroSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulComponentHeroSysContentTypeSysFilterInput>;
};

export type ContentfulComponentHeroSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulComponentHeroConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentHeroEdge>;
  nodes: Array<ContentfulComponentHero>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentHeroGroupConnection>;
};


export type ContentfulComponentHeroConnectionDistinctArgs = {
  field: ContentfulComponentHeroFieldSelector;
};


export type ContentfulComponentHeroConnectionMaxArgs = {
  field: ContentfulComponentHeroFieldSelector;
};


export type ContentfulComponentHeroConnectionMinArgs = {
  field: ContentfulComponentHeroFieldSelector;
};


export type ContentfulComponentHeroConnectionSumArgs = {
  field: ContentfulComponentHeroFieldSelector;
};


export type ContentfulComponentHeroConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentHeroFieldSelector;
};

export type ContentfulComponentHeroEdge = {
  next?: Maybe<ContentfulComponentHero>;
  node: ContentfulComponentHero;
  previous?: Maybe<ContentfulComponentHero>;
};

export type ContentfulComponentHeroFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  content?: InputMaybe<ContentfulComponentHeroContentFieldSelector>;
  imageLocation?: InputMaybe<FieldSelectorEnum>;
  image?: InputMaybe<ContentfulAssetFieldSelector>;
  page?: InputMaybe<ContentfulPageFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulComponentHeroSysFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulComponentHeroContentFieldSelector = {
  raw?: InputMaybe<FieldSelectorEnum>;
  references?: InputMaybe<ContentfulComponentActionItemFieldSelector>;
};

export type ContentfulComponentHeroSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulComponentHeroSysContentTypeFieldSelector>;
};

export type ContentfulComponentHeroSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulComponentHeroSysContentTypeSysFieldSelector>;
};

export type ContentfulComponentHeroSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulComponentHeroGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentHeroEdge>;
  nodes: Array<ContentfulComponentHero>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentHeroGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulComponentHeroGroupConnectionDistinctArgs = {
  field: ContentfulComponentHeroFieldSelector;
};


export type ContentfulComponentHeroGroupConnectionMaxArgs = {
  field: ContentfulComponentHeroFieldSelector;
};


export type ContentfulComponentHeroGroupConnectionMinArgs = {
  field: ContentfulComponentHeroFieldSelector;
};


export type ContentfulComponentHeroGroupConnectionSumArgs = {
  field: ContentfulComponentHeroFieldSelector;
};


export type ContentfulComponentHeroGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentHeroFieldSelector;
};

export type ContentfulComponentHeroFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  content?: InputMaybe<ContentfulComponentHeroContentFilterInput>;
  imageLocation?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulComponentHeroSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulComponentHeroSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  content?: InputMaybe<ContentfulComponentHeroContentSortInput>;
  imageLocation?: InputMaybe<SortOrderEnum>;
  image?: InputMaybe<ContentfulAssetSortInput>;
  page?: InputMaybe<ContentfulPageSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulComponentHeroSysSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulComponentHeroContentSortInput = {
  raw?: InputMaybe<SortOrderEnum>;
  references?: InputMaybe<ContentfulComponentActionItemSortInput>;
};

export type ContentfulComponentHeroSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulComponentHeroSysContentTypeSortInput>;
};

export type ContentfulComponentHeroSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulComponentHeroSysContentTypeSysSortInput>;
};

export type ContentfulComponentHeroSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulComponentCtaConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentCtaEdge>;
  nodes: Array<ContentfulComponentCta>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentCtaGroupConnection>;
};


export type ContentfulComponentCtaConnectionDistinctArgs = {
  field: ContentfulComponentCtaFieldSelector;
};


export type ContentfulComponentCtaConnectionMaxArgs = {
  field: ContentfulComponentCtaFieldSelector;
};


export type ContentfulComponentCtaConnectionMinArgs = {
  field: ContentfulComponentCtaFieldSelector;
};


export type ContentfulComponentCtaConnectionSumArgs = {
  field: ContentfulComponentCtaFieldSelector;
};


export type ContentfulComponentCtaConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentCtaFieldSelector;
};

export type ContentfulComponentCtaEdge = {
  next?: Maybe<ContentfulComponentCta>;
  node: ContentfulComponentCta;
  previous?: Maybe<ContentfulComponentCta>;
};

export type ContentfulComponentCtaGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentCtaEdge>;
  nodes: Array<ContentfulComponentCta>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentCtaGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulComponentCtaGroupConnectionDistinctArgs = {
  field: ContentfulComponentCtaFieldSelector;
};


export type ContentfulComponentCtaGroupConnectionMaxArgs = {
  field: ContentfulComponentCtaFieldSelector;
};


export type ContentfulComponentCtaGroupConnectionMinArgs = {
  field: ContentfulComponentCtaFieldSelector;
};


export type ContentfulComponentCtaGroupConnectionSumArgs = {
  field: ContentfulComponentCtaFieldSelector;
};


export type ContentfulComponentCtaGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentCtaFieldSelector;
};

export type ContentfulComponentActionItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentActionItemEdge>;
  nodes: Array<ContentfulComponentActionItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentActionItemGroupConnection>;
};


export type ContentfulComponentActionItemConnectionDistinctArgs = {
  field: ContentfulComponentActionItemFieldSelector;
};


export type ContentfulComponentActionItemConnectionMaxArgs = {
  field: ContentfulComponentActionItemFieldSelector;
};


export type ContentfulComponentActionItemConnectionMinArgs = {
  field: ContentfulComponentActionItemFieldSelector;
};


export type ContentfulComponentActionItemConnectionSumArgs = {
  field: ContentfulComponentActionItemFieldSelector;
};


export type ContentfulComponentActionItemConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentActionItemFieldSelector;
};

export type ContentfulComponentActionItemEdge = {
  next?: Maybe<ContentfulComponentActionItem>;
  node: ContentfulComponentActionItem;
  previous?: Maybe<ContentfulComponentActionItem>;
};

export type ContentfulComponentActionItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentActionItemEdge>;
  nodes: Array<ContentfulComponentActionItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentActionItemGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulComponentActionItemGroupConnectionDistinctArgs = {
  field: ContentfulComponentActionItemFieldSelector;
};


export type ContentfulComponentActionItemGroupConnectionMaxArgs = {
  field: ContentfulComponentActionItemFieldSelector;
};


export type ContentfulComponentActionItemGroupConnectionMinArgs = {
  field: ContentfulComponentActionItemFieldSelector;
};


export type ContentfulComponentActionItemGroupConnectionSumArgs = {
  field: ContentfulComponentActionItemFieldSelector;
};


export type ContentfulComponentActionItemGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentActionItemFieldSelector;
};

export type ContentfulHeaderConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHeaderEdge>;
  nodes: Array<ContentfulHeader>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulHeaderGroupConnection>;
};


export type ContentfulHeaderConnectionDistinctArgs = {
  field: ContentfulHeaderFieldSelector;
};


export type ContentfulHeaderConnectionMaxArgs = {
  field: ContentfulHeaderFieldSelector;
};


export type ContentfulHeaderConnectionMinArgs = {
  field: ContentfulHeaderFieldSelector;
};


export type ContentfulHeaderConnectionSumArgs = {
  field: ContentfulHeaderFieldSelector;
};


export type ContentfulHeaderConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulHeaderFieldSelector;
};

export type ContentfulHeaderEdge = {
  next?: Maybe<ContentfulHeader>;
  node: ContentfulHeader;
  previous?: Maybe<ContentfulHeader>;
};

export type ContentfulHeaderGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHeaderEdge>;
  nodes: Array<ContentfulHeader>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulHeaderGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulHeaderGroupConnectionDistinctArgs = {
  field: ContentfulHeaderFieldSelector;
};


export type ContentfulHeaderGroupConnectionMaxArgs = {
  field: ContentfulHeaderFieldSelector;
};


export type ContentfulHeaderGroupConnectionMinArgs = {
  field: ContentfulHeaderFieldSelector;
};


export type ContentfulHeaderGroupConnectionSumArgs = {
  field: ContentfulHeaderFieldSelector;
};


export type ContentfulHeaderGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulHeaderFieldSelector;
};

export type ContentfulComponentNavigationLinkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentNavigationLinkEdge>;
  nodes: Array<ContentfulComponentNavigationLink>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentNavigationLinkGroupConnection>;
};


export type ContentfulComponentNavigationLinkConnectionDistinctArgs = {
  field: ContentfulComponentNavigationLinkFieldSelector;
};


export type ContentfulComponentNavigationLinkConnectionMaxArgs = {
  field: ContentfulComponentNavigationLinkFieldSelector;
};


export type ContentfulComponentNavigationLinkConnectionMinArgs = {
  field: ContentfulComponentNavigationLinkFieldSelector;
};


export type ContentfulComponentNavigationLinkConnectionSumArgs = {
  field: ContentfulComponentNavigationLinkFieldSelector;
};


export type ContentfulComponentNavigationLinkConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentNavigationLinkFieldSelector;
};

export type ContentfulComponentNavigationLinkEdge = {
  next?: Maybe<ContentfulComponentNavigationLink>;
  node: ContentfulComponentNavigationLink;
  previous?: Maybe<ContentfulComponentNavigationLink>;
};

export type ContentfulComponentNavigationLinkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentNavigationLinkEdge>;
  nodes: Array<ContentfulComponentNavigationLink>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentNavigationLinkGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulComponentNavigationLinkGroupConnectionDistinctArgs = {
  field: ContentfulComponentNavigationLinkFieldSelector;
};


export type ContentfulComponentNavigationLinkGroupConnectionMaxArgs = {
  field: ContentfulComponentNavigationLinkFieldSelector;
};


export type ContentfulComponentNavigationLinkGroupConnectionMinArgs = {
  field: ContentfulComponentNavigationLinkFieldSelector;
};


export type ContentfulComponentNavigationLinkGroupConnectionSumArgs = {
  field: ContentfulComponentNavigationLinkFieldSelector;
};


export type ContentfulComponentNavigationLinkGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentNavigationLinkFieldSelector;
};

export type ContentfulFooterConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFooterEdge>;
  nodes: Array<ContentfulFooter>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulFooterGroupConnection>;
};


export type ContentfulFooterConnectionDistinctArgs = {
  field: ContentfulFooterFieldSelector;
};


export type ContentfulFooterConnectionMaxArgs = {
  field: ContentfulFooterFieldSelector;
};


export type ContentfulFooterConnectionMinArgs = {
  field: ContentfulFooterFieldSelector;
};


export type ContentfulFooterConnectionSumArgs = {
  field: ContentfulFooterFieldSelector;
};


export type ContentfulFooterConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulFooterFieldSelector;
};

export type ContentfulFooterEdge = {
  next?: Maybe<ContentfulFooter>;
  node: ContentfulFooter;
  previous?: Maybe<ContentfulFooter>;
};

export type ContentfulFooterGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFooterEdge>;
  nodes: Array<ContentfulFooter>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulFooterGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulFooterGroupConnectionDistinctArgs = {
  field: ContentfulFooterFieldSelector;
};


export type ContentfulFooterGroupConnectionMaxArgs = {
  field: ContentfulFooterFieldSelector;
};


export type ContentfulFooterGroupConnectionMinArgs = {
  field: ContentfulFooterFieldSelector;
};


export type ContentfulFooterGroupConnectionSumArgs = {
  field: ContentfulFooterFieldSelector;
};


export type ContentfulFooterGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulFooterFieldSelector;
};

export type ContentfulCustomComponentSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulCustomComponentSysContentTypeFilterInput>;
};

export type ContentfulCustomComponentSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulCustomComponentSysContentTypeSysFilterInput>;
};

export type ContentfulCustomComponentSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulCustomComponentConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCustomComponentEdge>;
  nodes: Array<ContentfulCustomComponent>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulCustomComponentGroupConnection>;
};


export type ContentfulCustomComponentConnectionDistinctArgs = {
  field: ContentfulCustomComponentFieldSelector;
};


export type ContentfulCustomComponentConnectionMaxArgs = {
  field: ContentfulCustomComponentFieldSelector;
};


export type ContentfulCustomComponentConnectionMinArgs = {
  field: ContentfulCustomComponentFieldSelector;
};


export type ContentfulCustomComponentConnectionSumArgs = {
  field: ContentfulCustomComponentFieldSelector;
};


export type ContentfulCustomComponentConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulCustomComponentFieldSelector;
};

export type ContentfulCustomComponentEdge = {
  next?: Maybe<ContentfulCustomComponent>;
  node: ContentfulCustomComponent;
  previous?: Maybe<ContentfulCustomComponent>;
};

export type ContentfulCustomComponentFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  page?: InputMaybe<ContentfulPageFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulCustomComponentSysFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulCustomComponentSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulCustomComponentSysContentTypeFieldSelector>;
};

export type ContentfulCustomComponentSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulCustomComponentSysContentTypeSysFieldSelector>;
};

export type ContentfulCustomComponentSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulCustomComponentGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCustomComponentEdge>;
  nodes: Array<ContentfulCustomComponent>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulCustomComponentGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulCustomComponentGroupConnectionDistinctArgs = {
  field: ContentfulCustomComponentFieldSelector;
};


export type ContentfulCustomComponentGroupConnectionMaxArgs = {
  field: ContentfulCustomComponentFieldSelector;
};


export type ContentfulCustomComponentGroupConnectionMinArgs = {
  field: ContentfulCustomComponentFieldSelector;
};


export type ContentfulCustomComponentGroupConnectionSumArgs = {
  field: ContentfulCustomComponentFieldSelector;
};


export type ContentfulCustomComponentGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulCustomComponentFieldSelector;
};

export type ContentfulCustomComponentFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  page?: InputMaybe<ContentfulPageFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulCustomComponentSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulCustomComponentSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  page?: InputMaybe<ContentfulPageSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulCustomComponentSysSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulCustomComponentSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulCustomComponentSysContentTypeSortInput>;
};

export type ContentfulCustomComponentSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulCustomComponentSysContentTypeSysSortInput>;
};

export type ContentfulCustomComponentSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldSelector;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldSelector;
};

export type ContentfulComponentFeatureBlockIconAttributesJsonNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentFeatureBlockIconAttributesJsonNodeEdge>;
  nodes: Array<ContentfulComponentFeatureBlockIconAttributesJsonNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentFeatureBlockIconAttributesJsonNodeGroupConnection>;
};


export type ContentfulComponentFeatureBlockIconAttributesJsonNodeConnectionDistinctArgs = {
  field: ContentfulComponentFeatureBlockIconAttributesJsonNodeFieldSelector;
};


export type ContentfulComponentFeatureBlockIconAttributesJsonNodeConnectionMaxArgs = {
  field: ContentfulComponentFeatureBlockIconAttributesJsonNodeFieldSelector;
};


export type ContentfulComponentFeatureBlockIconAttributesJsonNodeConnectionMinArgs = {
  field: ContentfulComponentFeatureBlockIconAttributesJsonNodeFieldSelector;
};


export type ContentfulComponentFeatureBlockIconAttributesJsonNodeConnectionSumArgs = {
  field: ContentfulComponentFeatureBlockIconAttributesJsonNodeFieldSelector;
};


export type ContentfulComponentFeatureBlockIconAttributesJsonNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentFeatureBlockIconAttributesJsonNodeFieldSelector;
};

export type ContentfulComponentFeatureBlockIconAttributesJsonNodeEdge = {
  next?: Maybe<ContentfulComponentFeatureBlockIconAttributesJsonNode>;
  node: ContentfulComponentFeatureBlockIconAttributesJsonNode;
  previous?: Maybe<ContentfulComponentFeatureBlockIconAttributesJsonNode>;
};

export type ContentfulComponentFeatureBlockIconAttributesJsonNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentFeatureBlockIconAttributesJsonNodeEdge>;
  nodes: Array<ContentfulComponentFeatureBlockIconAttributesJsonNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentFeatureBlockIconAttributesJsonNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulComponentFeatureBlockIconAttributesJsonNodeGroupConnectionDistinctArgs = {
  field: ContentfulComponentFeatureBlockIconAttributesJsonNodeFieldSelector;
};


export type ContentfulComponentFeatureBlockIconAttributesJsonNodeGroupConnectionMaxArgs = {
  field: ContentfulComponentFeatureBlockIconAttributesJsonNodeFieldSelector;
};


export type ContentfulComponentFeatureBlockIconAttributesJsonNodeGroupConnectionMinArgs = {
  field: ContentfulComponentFeatureBlockIconAttributesJsonNodeFieldSelector;
};


export type ContentfulComponentFeatureBlockIconAttributesJsonNodeGroupConnectionSumArgs = {
  field: ContentfulComponentFeatureBlockIconAttributesJsonNodeFieldSelector;
};


export type ContentfulComponentFeatureBlockIconAttributesJsonNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentFeatureBlockIconAttributesJsonNodeFieldSelector;
};

export type ContentfulComponentFeatureBlockDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentFeatureBlockDescriptionTextNodeEdge>;
  nodes: Array<ContentfulComponentFeatureBlockDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentFeatureBlockDescriptionTextNodeGroupConnection>;
};


export type ContentfulComponentFeatureBlockDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulComponentFeatureBlockDescriptionTextNodeFieldSelector;
};


export type ContentfulComponentFeatureBlockDescriptionTextNodeConnectionMaxArgs = {
  field: ContentfulComponentFeatureBlockDescriptionTextNodeFieldSelector;
};


export type ContentfulComponentFeatureBlockDescriptionTextNodeConnectionMinArgs = {
  field: ContentfulComponentFeatureBlockDescriptionTextNodeFieldSelector;
};


export type ContentfulComponentFeatureBlockDescriptionTextNodeConnectionSumArgs = {
  field: ContentfulComponentFeatureBlockDescriptionTextNodeFieldSelector;
};


export type ContentfulComponentFeatureBlockDescriptionTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentFeatureBlockDescriptionTextNodeFieldSelector;
};

export type ContentfulComponentFeatureBlockDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulComponentFeatureBlockDescriptionTextNode>;
  node: ContentfulComponentFeatureBlockDescriptionTextNode;
  previous?: Maybe<ContentfulComponentFeatureBlockDescriptionTextNode>;
};

export type ContentfulComponentFeatureBlockDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentFeatureBlockDescriptionTextNodeEdge>;
  nodes: Array<ContentfulComponentFeatureBlockDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentFeatureBlockDescriptionTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulComponentFeatureBlockDescriptionTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulComponentFeatureBlockDescriptionTextNodeFieldSelector;
};


export type ContentfulComponentFeatureBlockDescriptionTextNodeGroupConnectionMaxArgs = {
  field: ContentfulComponentFeatureBlockDescriptionTextNodeFieldSelector;
};


export type ContentfulComponentFeatureBlockDescriptionTextNodeGroupConnectionMinArgs = {
  field: ContentfulComponentFeatureBlockDescriptionTextNodeFieldSelector;
};


export type ContentfulComponentFeatureBlockDescriptionTextNodeGroupConnectionSumArgs = {
  field: ContentfulComponentFeatureBlockDescriptionTextNodeFieldSelector;
};


export type ContentfulComponentFeatureBlockDescriptionTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentFeatureBlockDescriptionTextNodeFieldSelector;
};

export type ContentfulComponentCtaDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentCtaDescriptionTextNodeEdge>;
  nodes: Array<ContentfulComponentCtaDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentCtaDescriptionTextNodeGroupConnection>;
};


export type ContentfulComponentCtaDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulComponentCtaDescriptionTextNodeFieldSelector;
};


export type ContentfulComponentCtaDescriptionTextNodeConnectionMaxArgs = {
  field: ContentfulComponentCtaDescriptionTextNodeFieldSelector;
};


export type ContentfulComponentCtaDescriptionTextNodeConnectionMinArgs = {
  field: ContentfulComponentCtaDescriptionTextNodeFieldSelector;
};


export type ContentfulComponentCtaDescriptionTextNodeConnectionSumArgs = {
  field: ContentfulComponentCtaDescriptionTextNodeFieldSelector;
};


export type ContentfulComponentCtaDescriptionTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentCtaDescriptionTextNodeFieldSelector;
};

export type ContentfulComponentCtaDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulComponentCtaDescriptionTextNode>;
  node: ContentfulComponentCtaDescriptionTextNode;
  previous?: Maybe<ContentfulComponentCtaDescriptionTextNode>;
};

export type ContentfulComponentCtaDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulComponentCtaDescriptionTextNodeEdge>;
  nodes: Array<ContentfulComponentCtaDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulComponentCtaDescriptionTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulComponentCtaDescriptionTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulComponentCtaDescriptionTextNodeFieldSelector;
};


export type ContentfulComponentCtaDescriptionTextNodeGroupConnectionMaxArgs = {
  field: ContentfulComponentCtaDescriptionTextNodeFieldSelector;
};


export type ContentfulComponentCtaDescriptionTextNodeGroupConnectionMinArgs = {
  field: ContentfulComponentCtaDescriptionTextNodeFieldSelector;
};


export type ContentfulComponentCtaDescriptionTextNodeGroupConnectionSumArgs = {
  field: ContentfulComponentCtaDescriptionTextNodeFieldSelector;
};


export type ContentfulComponentCtaDescriptionTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulComponentCtaDescriptionTextNodeFieldSelector;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeConnectionMaxArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeConnectionMinArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeConnectionSumArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldSelector;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  name?: InputMaybe<FieldSelectorEnum>;
  displayField?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulContentTypeSysFieldSelector>;
};

export type ContentfulContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulContentTypeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulContentTypeGroupConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeGroupConnectionMaxArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeGroupConnectionMinArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeGroupConnectionSumArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldSelector;
};

export type ContentfulContentTypeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  name?: InputMaybe<SortOrderEnum>;
  displayField?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulContentTypeSysSortInput>;
};

export type ContentfulContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ActionItemComponentFragment = { id: string, text?: string | null, link?: string | null, icon?: string | null, itemType?: string | null, align?: string | null, width?: string | null, iconPosition?: string | null, contentful_id: string };

export type CtaComponentFragment = { title?: string | null, featuresOrientation?: string | null, align?: string | null, boxed?: boolean | null, content?: { raw?: string | null, references?: Array<{ id: string, text?: string | null, link?: string | null, icon?: string | null, itemType?: string | null, align?: string | null, width?: string | null, iconPosition?: string | null, contentful_id: string } | {} | null> | null } | null, features?: Array<{ contentful_id: string, id: string, title?: string | null, layout?: string | null, icon?: string | null, internal: { type: string }, description?: { description?: string | null } | null, iconAttributes?: { size?: number | null, stroke?: number | null, color?: string | null } | null } | null> | null };

export type CustomComponentFragment = { name?: string | null, contentful_id: string };

export type DuplexComponentFragment = { title?: string | null, align?: string | null, description?: { raw?: string | null, references?: Array<{ contentful_id: string, id: string, title?: string | null, layout?: string | null, icon?: string | null, internal: { type: string }, description?: { description?: string | null } | null, iconAttributes?: { size?: number | null, stroke?: number | null, color?: string | null } | null } | null> | null } | null, image?: { description?: string | null, file?: { contentType?: string | null, fileName?: string | null, url?: string | null } | null } | null };

export type FeatureBlockComponentFragment = { id: string, title?: string | null, layout?: string | null, icon?: string | null, description?: { description?: string | null } | null, iconAttributes?: { size?: number | null, stroke?: number | null, color?: string | null } | null };

export type FooterComponentFragment = { description?: string | null, disclaimer?: string | null, sectionOrder?: Array<string | null> | null, links?: Array<{ title?: string | null, icon?: string | null, iconPosition?: string | null, link?: string | null, opensInNewTab?: boolean | null, section?: string | null } | null> | null, logo?: { description?: string | null, title?: string | null, file?: { fileName?: string | null, url?: string | null } | null } | null, socialMediaLinks?: Array<{ icon?: string | null, link?: string | null, opensInNewTab?: boolean | null } | null> | null };

export type HeaderComponentFragment = { links?: Array<{ title?: string | null, icon?: string | null, iconPosition?: string | null, link?: string | null, opensInNewTab?: boolean | null } | null> | null, cta?: { id: string, text?: string | null, link?: string | null, icon?: string | null, itemType?: string | null, align?: string | null, width?: string | null, iconPosition?: string | null, contentful_id: string } | null, logo?: { description?: string | null, title?: string | null, file?: { fileName?: string | null, url?: string | null } | null } | null };

export type HeroComponentFragment = { title?: string | null, imageLocation?: string | null, content?: { raw?: string | null, references?: Array<{ contentful_id: string, id: string, text?: string | null, link?: string | null, icon?: string | null, itemType?: string | null, align?: string | null, width?: string | null, iconPosition?: string | null, internal: { type: string } } | null> | null } | null, image?: { title?: string | null, description?: string | null, file?: { fileName?: string | null, url?: string | null } | null } | null };

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { contentfulPage?: { id: string, header?: { links?: Array<{ title?: string | null, icon?: string | null, iconPosition?: string | null, link?: string | null, opensInNewTab?: boolean | null } | null> | null, cta?: { id: string, text?: string | null, link?: string | null, icon?: string | null, itemType?: string | null, align?: string | null, width?: string | null, iconPosition?: string | null, contentful_id: string } | null, logo?: { description?: string | null, title?: string | null, file?: { fileName?: string | null, url?: string | null } | null } | null } | null, body?: Array<{ __typename: 'ContentfulComponentCta', title?: string | null, featuresOrientation?: string | null, align?: string | null, boxed?: boolean | null, content?: { raw?: string | null, references?: Array<{ id: string, text?: string | null, link?: string | null, icon?: string | null, itemType?: string | null, align?: string | null, width?: string | null, iconPosition?: string | null, contentful_id: string } | {} | null> | null } | null, features?: Array<{ contentful_id: string, id: string, title?: string | null, layout?: string | null, icon?: string | null, internal: { type: string }, description?: { description?: string | null } | null, iconAttributes?: { size?: number | null, stroke?: number | null, color?: string | null } | null } | null> | null } | { __typename: 'ContentfulComponentDuplex', title?: string | null, align?: string | null, description?: { raw?: string | null, references?: Array<{ contentful_id: string, id: string, title?: string | null, layout?: string | null, icon?: string | null, internal: { type: string }, description?: { description?: string | null } | null, iconAttributes?: { size?: number | null, stroke?: number | null, color?: string | null } | null } | null> | null } | null, image?: { description?: string | null, file?: { contentType?: string | null, fileName?: string | null, url?: string | null } | null } | null } | { __typename: 'ContentfulComponentHero', title?: string | null, imageLocation?: string | null, content?: { raw?: string | null, references?: Array<{ contentful_id: string, id: string, text?: string | null, link?: string | null, icon?: string | null, itemType?: string | null, align?: string | null, width?: string | null, iconPosition?: string | null, internal: { type: string } } | null> | null } | null, image?: { title?: string | null, description?: string | null, file?: { fileName?: string | null, url?: string | null } | null } | null } | { __typename: 'ContentfulCustomComponent' } | null> | null, footer?: { description?: string | null, disclaimer?: string | null, sectionOrder?: Array<string | null> | null, links?: Array<{ title?: string | null, icon?: string | null, iconPosition?: string | null, link?: string | null, opensInNewTab?: boolean | null, section?: string | null } | null> | null, logo?: { description?: string | null, title?: string | null, file?: { fileName?: string | null, url?: string | null } | null } | null, socialMediaLinks?: Array<{ icon?: string | null, link?: string | null, opensInNewTab?: boolean | null } | null> | null } | null } | null };

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = { contentfulPage?: { id: string, header?: { links?: Array<{ title?: string | null, icon?: string | null, iconPosition?: string | null, link?: string | null, opensInNewTab?: boolean | null } | null> | null, cta?: { id: string, text?: string | null, link?: string | null, icon?: string | null, itemType?: string | null, align?: string | null, width?: string | null, iconPosition?: string | null, contentful_id: string } | null, logo?: { description?: string | null, title?: string | null, file?: { fileName?: string | null, url?: string | null } | null } | null } | null, body?: Array<{ __typename: 'ContentfulComponentCta', title?: string | null, featuresOrientation?: string | null, align?: string | null, boxed?: boolean | null, content?: { raw?: string | null, references?: Array<{ id: string, text?: string | null, link?: string | null, icon?: string | null, itemType?: string | null, align?: string | null, width?: string | null, iconPosition?: string | null, contentful_id: string } | {} | null> | null } | null, features?: Array<{ contentful_id: string, id: string, title?: string | null, layout?: string | null, icon?: string | null, internal: { type: string }, description?: { description?: string | null } | null, iconAttributes?: { size?: number | null, stroke?: number | null, color?: string | null } | null } | null> | null } | { __typename: 'ContentfulComponentDuplex', title?: string | null, align?: string | null, description?: { raw?: string | null, references?: Array<{ contentful_id: string, id: string, title?: string | null, layout?: string | null, icon?: string | null, internal: { type: string }, description?: { description?: string | null } | null, iconAttributes?: { size?: number | null, stroke?: number | null, color?: string | null } | null } | null> | null } | null, image?: { description?: string | null, file?: { contentType?: string | null, fileName?: string | null, url?: string | null } | null } | null } | { __typename: 'ContentfulComponentHero', title?: string | null, imageLocation?: string | null, content?: { raw?: string | null, references?: Array<{ contentful_id: string, id: string, text?: string | null, link?: string | null, icon?: string | null, itemType?: string | null, align?: string | null, width?: string | null, iconPosition?: string | null, internal: { type: string } } | null> | null } | null, image?: { title?: string | null, description?: string | null, file?: { fileName?: string | null, url?: string | null } | null } | null } | { __typename: 'ContentfulCustomComponent' } | null> | null, footer?: { description?: string | null, disclaimer?: string | null, sectionOrder?: Array<string | null> | null, links?: Array<{ title?: string | null, icon?: string | null, iconPosition?: string | null, link?: string | null, opensInNewTab?: boolean | null, section?: string | null } | null> | null, logo?: { description?: string | null, title?: string | null, file?: { fileName?: string | null, url?: string | null } | null } | null, socialMediaLinks?: Array<{ icon?: string | null, link?: string | null, opensInNewTab?: boolean | null } | null> | null } | null } | null };
