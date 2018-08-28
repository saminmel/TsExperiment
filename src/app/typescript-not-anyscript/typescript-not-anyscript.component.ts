String.prototype.format = function () {
    const pattern = /\{\d+\}/g;
    const args = arguments;
    return this.replace(pattern, function (capture) { return args[capture.match(/\d+/)]; });
};

interface String {
    replaceAll(search: string, replacement: string): string;
}

// if you don't need any logic to be encapsulated, just use interface
export interface IAppSettings {
    isAdministrator: string;
    isBoss?: string;
}
