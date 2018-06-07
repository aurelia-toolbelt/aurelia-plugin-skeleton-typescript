/**
 * Plugin for fusebox t inject code so we dont need it in our sample
 *
 */
export const bootstrapLoader = function () {
  const Loader = class {

    public init() {
      // nothing
    }

    public bundleEnd(context: any) {
      context.source.addContent('FuseBox.import("fuse-box-aurelia-loader")');
      context.source.addContent('FuseBox.import("aurelia-bootstrapper")');
      context.source.addContent('window.FUSEBOX_AURELIA_LOADER_RELOAD = true;');
      context.source.addContent('window.FUSEBOX_AURELIA_LOADER_LOGGING = true;');
    }
  };

  return new Loader();
};
