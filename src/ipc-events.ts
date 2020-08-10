export enum IpcEvents {
  OPEN_SETTINGS = 'OPEN_SETTINGS',
  LOAD_GIST_REQUEST = 'LOAD_GIST_REQUEST',
  LOAD_ELECTRON_EXAMPLE_REQUEST = 'LOAD_ELECTRON_EXAMPLE_REQUEST',
  FIDDLE_RUN = 'FIDDLE_RUN',
  FIDDLE_PACKAGE = 'FIDDLE_PACKAGE',
  FIDDLE_MAKE = 'FIDDLE_MAKE',
  MONACO_EXECUTE_COMMAND = 'MONACO_EXECUTE_COMMAND',
  MONACO_TOGGLE_OPTION = 'MONACO_TOGGLE_OPTION',
  FS_NEW_FIDDLE = 'FS_NEW_FIDDLE',
  FS_OPEN_FIDDLE = 'FS_OPEN_FIDDLE',
  FS_OPEN_TEMPLATE = 'FS_OPEN_TEMPLATE',
  FS_SAVE_FIDDLE = 'FS_SAVE_FIDDLE',
  FS_SAVE_FIDDLE_AS = 'FS_SAVE_FIDDLE_AS',
  FS_SAVE_FIDDLE_GIST = 'FS_SAVE_FIDDLE_GIST',
  FS_SAVE_FIDDLE_FORGE = 'FS_SAVE_FIDDLE_FORGE',
  FS_SAVE_FIDDLE_DIALOG = 'FS_SAVE_FIDDLE_DIALOG',
  FS_SAVE_FIDDLE_ERROR = 'FS_SAVE_FIDDLE_ERROR',
  SHOW_WARNING_DIALOG = 'SHOW_WARNING_DIALOG',
  SHOW_CONFIRMATION_DIALOG = 'SHOW_CONFIRMATION_DIALOG',
  SHOW_WELCOME_TOUR = 'SHOW_WELCOME_TOUR',
  CLEAR_CONSOLE = 'CLEAR_CONSOLE',
  LOAD_LOCAL_VERSION_FOLDER = 'LOAD_LOCAL_VERSION_FOLDER',
  SHOW_LOCAL_VERSION_FOLDER_DIALOG = 'SHOW_LOCAL_VERSION_FOLDER_DIALOG',
  BISECT_COMMANDS_TOGGLE = 'BISECT_COMMANDS_TOGGLE',
  SHOW_INACTIVE = 'SHOW_INACTIVE',
  BEFORE_QUIT = 'BEFORE_QUIT',
  CONFIRM_QUIT = 'CONFIRM_QUIT',
  SET_APPDATA_DIR = 'SET_APPDATA_DIR',
  SELECT_ALL_IN_EDITOR = 'SELECT_ALL_IN_EDITOR',
  ERICK = 'ERICK',
}

export const ipcMainEvents = [
  IpcEvents.FS_SAVE_FIDDLE_DIALOG,
  IpcEvents.FS_SAVE_FIDDLE,
  IpcEvents.SHOW_WARNING_DIALOG,
  IpcEvents.SHOW_CONFIRMATION_DIALOG,
  IpcEvents.SHOW_LOCAL_VERSION_FOLDER_DIALOG,
  IpcEvents.SHOW_INACTIVE,
  IpcEvents.CONFIRM_QUIT,
  IpcEvents.ERICK,
];

export const ipcRendererEvents = [
  IpcEvents.OPEN_SETTINGS,
  IpcEvents.LOAD_GIST_REQUEST,
  IpcEvents.LOAD_ELECTRON_EXAMPLE_REQUEST,
  IpcEvents.FIDDLE_RUN,
  IpcEvents.FIDDLE_PACKAGE,
  IpcEvents.FIDDLE_MAKE,
  IpcEvents.MONACO_EXECUTE_COMMAND,
  IpcEvents.MONACO_TOGGLE_OPTION,
  IpcEvents.FS_NEW_FIDDLE,
  IpcEvents.FS_OPEN_FIDDLE,
  IpcEvents.FS_OPEN_TEMPLATE,
  IpcEvents.FS_SAVE_FIDDLE,
  IpcEvents.FS_SAVE_FIDDLE_AS,
  IpcEvents.FS_SAVE_FIDDLE_FORGE,
  IpcEvents.FS_SAVE_FIDDLE_GIST,
  IpcEvents.SHOW_WELCOME_TOUR,
  IpcEvents.CLEAR_CONSOLE,
  IpcEvents.LOAD_LOCAL_VERSION_FOLDER,
  IpcEvents.BISECT_COMMANDS_TOGGLE,
  IpcEvents.BEFORE_QUIT,
  IpcEvents.SET_APPDATA_DIR,
  IpcEvents.SELECT_ALL_IN_EDITOR,
  IpcEvents.ERICK,
];

export const WEBCONTENTS_READY_FOR_IPC_SIGNAL =
  'WEBCONTENTS_READY_FOR_IPC_SIGNAL';
