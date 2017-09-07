/* tslint:disable-next-line:interface-name */
interface String {
    replaceAll(search: string, replacement: string): string;
    format(...parts: string[]): string;
}


String.prototype.replaceAll = function (search, replacement) {
    const target = this;
    return target.replace(new RegExp(escapeRegExp(search), 'g'), replacement);

    function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
};

String.prototype.format = function () {
    const pattern = /\{\d+\}/g;
    const args = arguments;
    return this.replace(pattern, function (capture) { return args[capture.match(/\d+/)]; });
};
