export class AppConstants {
    public static SOCKET_URL = 'http://localhost:3000';
    public static FUNCTION_PREFIX = 'client_';
    public static FUNCTION_SUFFIX = '_OnConnect';
    public static NAMESPACE_PREFIX = 'client-';

    // client name to be in this format "client:<id>:data"
    public static EVENT_PREFIX = 'client:';
    public static EVENT_SUFFIX = ':data';
}
