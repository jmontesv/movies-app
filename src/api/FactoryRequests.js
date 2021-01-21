class FactoryRequests {
  createUrl(endPoint, params = "", queryVariables) {
    const formatInQueryVariables = function(variables) {
      let resultString = "";
      for (let variable in variables) {
        resultString =
          resultString + "&" + variable + "=" + variables[variable];
      }
      return resultString.replace(/&/, "");
    };
    const url = new URL(
      "/" +
        process.env.VUE_APP_API_VERSION +
        endPoint +
        params +
        "?" +
        formatInQueryVariables(queryVariables),
      process.env.VUE_APP_API_URL
    );
    return url;
  }
  createConfig(headers, method, body) {
    const myHeaders = new Headers();
    for (let header in headers) {
      myHeaders.append(header, headers[header]);
    }
    const init = {
      headers: myHeaders,
      method: method,
    };
    if (method !== "GET") init.body = body;
    return init;
  }

  async createRequest(url, config) {
    const newRequest = new Request(url, config);
    try {
      const response = await fetch(newRequest);
      return await response.json();
    } catch (err) {
      return err;
    }
  }
}

export const factoryFetchRequest = new FactoryRequests();
