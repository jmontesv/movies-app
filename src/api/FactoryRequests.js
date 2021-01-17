class FactoryRequests {
  async createRequest(
    endPoint,
    params = "",
    queryVariables = "",
    method = "GET",
    body = {}
  ) {
    const url = new URL(
      "/" +
        process.env.VUE_APP_API_VERSION +
        endPoint +
        params +
        "?" +
        queryVariables,
      process.env.VUE_APP_API_URL
    );
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const init = {
      headers: myHeaders,
      method: method,
    };
    if (method !== "GET") init.body = body;
    const newRequest = new Request(url, init);
    try {
      const response = await fetch(newRequest);
      return await response.json();
    } catch (err) {
      return err;
    }
  }
}

export const factoryFetchRequest = new FactoryRequests();
