import Searchbar from 'components/SearchBar';
import { useSearchMovie } from 'hooks/searchMoviesHook';
export const Navigation = () => {
    <nav class="bp4-navbar bp4-dark">
        <div style="margin: 0 auto; width: 480px;"> <!-- ADD ME -->
            <div class="bp4-navbar-group bp4-align-left">
                <div class="bp4-navbar-heading">Movie search</div>
            </div>
            <div class="bp4-navbar-group bp4-align-right">
                <button class="bp4-button bp4-minimal bp4-icon-home">Home</button>
                <button class="bp4-button bp4-minimal bp4-icon-document">Files</button>
                <span class="bp4-navbar-divider"></span>
                <button class="bp4-button bp4-minimal bp4-icon-user"></button>
                <button class="bp4-button bp4-minimal bp4-icon-notifications"></button>
                <button class="bp4-button bp4-minimal bp4-icon-cog"></button>
            </div>
        </div>
    </nav>
}