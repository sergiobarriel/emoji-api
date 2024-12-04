FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY ["orchestrator.csproj", "./"]
RUN dotnet restore "orchestrator.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "orchestrator.csproj" --configuration Release -o /app/build

FROM build AS publish
RUN dotnet publish "orchestrator.csproj" --configuration Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "orchestrator.dll"]
