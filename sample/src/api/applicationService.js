import { IframeMessageProxy } from 'iframe-message-proxy'

export const getApplication = async () => {
    const { response } = await IframeMessageProxy.sendMessage({
        action: 'getApplication',
    })

    if (response) {
        return response.application;
    }
    else {
        return ({
            shortName: "Application"
        });
    }
}

export const getContacts = async () => {
    const { response } = await IframeMessageProxy.sendMessage({
        action: 'sendCommand',
        content: {
            destination: 'MessagingHubService',
            command: {
                method: 'get',
                uri: '/contacts'
            }
        }
    })
    if (response) {
        return response.items
    }
    else
        return [];
}

export const getThreads = async () => {
    const { response } = await IframeMessageProxy.sendMessage({
        action: 'sendCommand',
        content: {
            destination: 'MessagingHubService',
            command: {
                method: 'get',
                uri: '/threads'
            }
        }
    })

    if (response) {
        return response.items
    }
    else
        return [];
}